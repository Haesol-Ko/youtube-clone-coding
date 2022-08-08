class Youtube {
    /**
     * Benefit of using axios
     *  1. improve readability of params
     *  2. automatically transform to json
     *  3. can be used on IE (fetch can't)
     */
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            },
        });

        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            }
        })

        return response.data.items.map(item => ({...item, id: item.id.videoId}));
    }
}

export default Youtube;