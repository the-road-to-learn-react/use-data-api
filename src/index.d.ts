declare module "use-data-api" {
    const useDataApi: <T>(
        url: string,
        initialState?: T
    ) => [
            {
                data?: T;
                isLoading: boolean;
                isError: boolean;
            },
            () => Promise<void>
        ];

    export default useDataApi;
}
