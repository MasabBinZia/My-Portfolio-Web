'use client';
import axios from 'axios';
import { useEffect } from 'react';

export function ReportView() {
  useEffect(() => {
    const postView = async () => {
      try {
        await axios.post('/api/views');
      } catch (error) {}
    };

    postView();
  }, []);

  return null;
}
