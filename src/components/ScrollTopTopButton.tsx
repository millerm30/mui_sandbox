import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { ArrowUpwardOutlined } from '@mui/icons-material';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {visible && (
        <Fab
          color="primary"
          aria-label="scroll to top"
          size="small"
          onClick={scrollToTop}
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <ArrowUpwardOutlined />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTopButton;
