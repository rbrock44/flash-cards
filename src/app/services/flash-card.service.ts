import {FlashcardsData} from "../type/flash-card.type";

export async function getFlashCards(): Promise<FlashcardsData> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/rbrock44/flash-cards-data/master/flash-card-data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store',
    });

    return (await response.json()) as FlashcardsData;
  } catch (error) {
    console.log(error);
    return getLocalCards();
    return { categories: [
        {
          id: '',
          name: 'Error Retrieving Flash Card Data',
          subCategories: []
        }
      ]};
  }
}

function getLocalCards(): Promise<FlashcardsData> {
  return Promise.resolve({ categories: [
      {
        id: '1',
        name: 'Medical Coding',
        subCategories: [
          {
            id: '1-1',
            name: '100 Words',
            flashCards: [
              {
                id: '1-1-1',
                question: '-ectomy',
                answer: 'thing'
              }
            ],
          },
          {
            id: '1-2',
            name: '50 Abbreviations',
            flashCards: [
              {
                id: '1-2-1',
                question: 'CDO',
                answer: 'thing'
              }
            ],
          }
        ]
      }
    ]});
}
