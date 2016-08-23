export class InMemoryDataService {
    createDb() {
        let buildCase = [
            { buildName: 'a' },
            { buildName: 'a2' }
        ];
        return {buildCase};
    }
}
