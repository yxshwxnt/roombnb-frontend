import React from "react";  
import axios from "axios";
import EasyEdit, { Types } from "react-easy-edit";


const Test = () => { 
  const [apartment, setApartment] = useState({});
  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get(`/api/apartments/1`);
      setApartment(response.data);
      console.log(apartment);
    };
    fetchApartments();
  }, []);
  return (
    <>
      <div>
        <EasyEdit
          type={Types.TEXT}
          value="Edit"
          onSave={(val) => alert("cancelled!")}
        />
      </div>
    </>
  );
};

export default Test;
