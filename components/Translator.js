import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';
import { translateText } from '../lib/translationService';

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es'); // Default to Spanish

  const handleTranslate = async () => {
    try {
      const result = await translateText(text, targetLanguage);
      setTranslatedText(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Enter text"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
        style={{ marginBottom: '20px' }}
      >
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        <MenuItem value="de">German</MenuItem>
        <MenuItem value="zh">Chinese</MenuItem>
        <MenuItem value="ja">Japanese</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={handleTranslate}>
        Translate
      </Button>
      {translatedText && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
