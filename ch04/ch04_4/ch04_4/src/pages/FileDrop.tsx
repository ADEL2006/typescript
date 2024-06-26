import type { ChangeEvent, DragEvent } from 'react';

import { useState, useRef, useCallback, useMemo } from 'react';

import { useToggle } from '../hooks';

import { Title, Div } from '../components';

import { imageFileReaderP } from '../utils';

import { Button } from '../theme/daisyui';

export default function FileDrop() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const [error, setError] = useState<Error | null>(null);

    const [loading, toggleLoading] = useToggle(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onDivClick = useCallback(() => inputRef.current?.click(), []);

    const makeImageUrls = useCallback(
        (files: File[]) => {
            const promises = Array.from(files).map(imageFileReaderP);

            toggleLoading();

            Promise.all(promises)
                .then((urls) => setImageUrls((imageUrls) => [...urls, ...imageUrls]))
                .catch(setError)
                .finally(toggleLoading);
        },
        [toggleLoading]
    );

    const onInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setError(null);

            const files = e.target.files;

            files && makeImageUrls(Array.from(files));
        },
        [makeImageUrls]
    )
}