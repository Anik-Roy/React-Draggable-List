import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { moveArray, getDragStateZIndex, calculateSwapDistance } from "../utils";
import {
    useDynamicList,
    useDynamicListItem,
    DynamicListItemProps
} from "../dynamic";
import { useItems } from "../App";

type DynamicSizeItemProps = {
    index: number;
    item: any;
    itemProps: DynamicListItemProps;
};

function DynamicSizeItem({
    index,
    item,
    itemProps
}: DynamicSizeItemProps) {
    const [dragState, ref, eventHandlers] = useDynamicListItem<HTMLDivElement>(
        index,
        "y",
        itemProps
    );

    return (
        <div
            style={{
                padding: 0,
                margin: 10,
                width: "90%",
                backgroundColor: "white",
                // If we're dragging, we want to set the zIndex of that item to be on top of the other items.
                zIndex: getDragStateZIndex(dragState)
            }}
        >
            <motion.div
                layout
                initial={false}
                drag="y"
                ref={ref}
                style={{
                    border: '1px solid #ddd',
                    borderRadius: 5
                }}
                whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 3px 3px rgba(0,0,0,0.15)"
                }}
                whileTap={{
                    scale: 1.12,
                    boxShadow: "0px 5px 5px rgba(0,0,0,0.1)"
                }}
                {...eventHandlers}
            >
                <div style={{ padding: "20px" }}>
                    <img src={item.preview} alt="image" style={{ objectFit: "contain", width: "50px", height: "50px" }} />
                    <p>Click and hold me to drag</p>
                </div>
            </motion.div>
        </div>
    );
}

export default function FixedSizeList() {
    const [items, setItems] = useItems();
    const onPositionUpdate = useCallback(
        (startIndex: number, endIndex: number) => {
            setItems(moveArray(items, startIndex, endIndex));
        },
        [items, setItems]
    );

    const props = useDynamicList({
        items,
        swapDistance: calculateSwapDistance,
        onPositionUpdate
    });

    return (
        <div>
            <div style={{ width: "100%" }}>
                {items.map((item, i) => (
                    <DynamicSizeItem
                        key={item.id}
                        item={item}
                        index={i}
                        itemProps={props}
                    />
                ))}
            </div>
        </div>
    );
}