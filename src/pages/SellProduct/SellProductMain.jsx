import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SellProduct from './SellProduct';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { resetSellProductPage } from 'redux/reducers/productReducer';
const SellProductMain = () => {
  const dispatch = useDispatch();
  const [keyId, setKeyId] = useState(uuidv4());
  const [oldKeyId, setOldKeyId] = useState();
  useEffect(() => {
    // dispatch(resetSellProductPage());
    const key = uuidv4();
    setKeyId(key);
    // setTimeout(() => {
    //   setOldKeyId(key);
    // }, 10);
  }, []);
  return <SellProduct key={keyId} />;
};

export default SellProductMain;
