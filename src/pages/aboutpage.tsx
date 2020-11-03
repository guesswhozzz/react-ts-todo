import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic mollitia,
        laborum molestiae veniam vitae ipsam, consectetur suscipit expedita odio
        quisquam sunt perferendis culpa sint inventore asperiores architecto
        adipisci dolores. Repudiandae!
      </p>
      <button
        onClick={() => {
          history.push('/');
        }}
      >
        назад
      </button>
    </>
  );
};
