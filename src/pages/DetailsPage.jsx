import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../services/apiService';

const DetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, [id]);

  const fetchItem = async () => {
    try {
      const data = await getItem(id);
      setItem(data);
    } catch (error) {
      console.error(`Error fetching item with id ${id}:`, error);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Item Details</h2>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Price:</strong> {item.price}</p>
      <p><strong>Image Path:</strong> {item.imagePath}</p>
    </div>
  );
};

export default DetailsPage;