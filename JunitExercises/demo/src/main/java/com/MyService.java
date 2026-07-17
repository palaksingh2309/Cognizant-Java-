package com;

/**
 * Service class that fetches data from an external API dependency.
 */
public class MyService {

    /** The external API instance. */
    private ExternalApi api;

    /**
     * Constructor for MyService.
     * @param api the ExternalApi mock or implementation
     */
    public MyService(ExternalApi api) {
        this.api = api;
    }

    /**
     * Fetches data from the external API.
     * @return the data string from external API
     */
    public String fetchData() {
        return api.getData();
    }
}
