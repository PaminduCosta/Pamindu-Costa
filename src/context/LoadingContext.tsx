"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type LoadingContextType = {
    isLoading: boolean;
    addLoader: (key: string) => void;
    removeLoader: (key: string) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [loadingKeys, setLoadingKeys] = useState<Set<string>>(new Set(['initial']));
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Clear initial loader after 1 second
        const timer = setTimeout(() => {
            removeLoader('initial');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const addLoader = useCallback((key: string) => {
        setLoadingKeys(prev => {
            const newSet = new Set(prev);
            newSet.add(key);
            return newSet;
        });
    }, []);

    const removeLoader = useCallback((key: string) => {
        setLoadingKeys(prev => {
            const newSet = new Set(prev);
            newSet.delete(key);
            return newSet;
        });
    }, []);

    const isLoading = loadingKeys.size > 0;

    const value = useMemo(() => ({
        isLoading,
        addLoader,
        removeLoader
    }), [isLoading, addLoader, removeLoader]);

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
}
