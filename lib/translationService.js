import axios from 'axios';

const API_URL = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(API_URL, null, {
      params: {
        q: text,
        target: targetLanguage,
        key: API_KEY,
      },
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error during translation:', error);
    throw new Error('Translation failed.');
  }
};
