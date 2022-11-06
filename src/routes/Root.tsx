import { useEffect } from 'react';
import { toast } from 'react-toastify';
import App from 'components/pages/App';

export default function Root() {
  useEffect(() => {
    toast('🦄 React TS 보일러플레이트');
  }, []);

  return <App />;
}
