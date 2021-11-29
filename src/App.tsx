import React, { createContext, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import DynamicSizeList from "./components/DynamicSizeList";
import "./App.css";
import UploadIcon from './icons/upload.png';

/**
 * This is an example of drag-to-reorder in Framer Motion 3.
 *
 * Fixed size version: https://codesandbox.io/s/framer-motion-2-drag-to-reorder-forked-njcdl
 * Virtual list version: https://codesandbox.io/s/framer-motion-2-drag-to-reorder-fixed-size-forked-kxnb7
 */

export type ItemType = {
    id: number;
    preview: string;
};

const ItemsContext = createContext<
    [ItemType[], (setItems: ItemType[]) => void]
>([[], (_) => null]);

export default function App() {
    const [items, setItems] = useState<ItemType[]>(() => []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        multiple: true,
        onDrop: async (acceptedFiles) => {
            if (acceptedFiles.length) {
                let prevItems = [...items];
                let selectedFiles = acceptedFiles.map((file, idx) => Object.assign(file, {
                    preview: URL.createObjectURL(file),
                    id: items.length + idx + 1
                }));
                setItems(prevItems.concat(selectedFiles));

                // setItems(acceptedFiles.map((file, idx) => Object.assign(file, {
                //     preview: URL.createObjectURL(file),
                //     id: idx
                // })));
            }
        },
    });

    return (
        <ItemsContext.Provider value={[items, setItems]}>
            <div
                {...getRootProps({
                    className:
                        "border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none",
                })}>
                <input {...getInputProps()} />
                <div className="flex flex-col justify-items-center items-center">
                    <img width="50" height="50" src={UploadIcon} alt="icon" />
                    <p className="text-body text-sm mt-4 text-center">
                        upload images
                    </p>
                </div>
            </div>
            <DynamicSizeList />
        </ItemsContext.Provider>
    );
}

export const useItems = () => useContext(ItemsContext);