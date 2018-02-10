import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cards = [
            { id: 1, name: 'Card 1' },
            { id: 2, name: 'Card 2' },
            { id: 3, name: 'Card 3' },
            { id: 4, name: 'Card 4' },
            { id: 5, name: 'Card 5' },
            { id: 6, name: 'Card 6' },
            { id: 7, name: 'Card 7' },
            { id: 8, name: 'Card 8' },
            { id: 9, name: 'Card 9' },
            { id: 10, name: 'Card 10' },
            { id: 11, name: 'Card 11' },
            { id: 12, name: 'Card 12' },
            { id: 13, name: 'Card 13' },
            { id: 14, name: 'Card 14' },
            { id: 15, name: 'Card 15' },
            { id: 16, name: 'Card 16' },
            { id: 17, name: 'Card 17' },
            { id: 18, name: 'Card 18' },
            { id: 19, name: 'Card 19' },
            { id: 20, name: 'Card 20' }
        ];
        return { cards };
    }
}