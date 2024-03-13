import { Table } from 'antd';
import { title } from 'process';
import React, { useEffect, useState } from 'react'
import { supabase } from '@/utils';
const dataSource = [
  {
    key: '1',
    PRODUCT_ID: '1',
    PRODUCT_NAME: 'Product 1',
    PRODUCT_DESCRIPTION: 'Product 1 Description',
    ORIGINAL_PRICE: 100,
    DISCOUNT_PRICE: 80,
    DISCOUNT_RATE: 20
  },
  {
    key: '2',
    PRODUCT_ID: '2',
    PRODUCT_NAME: 'Product 2',
    PRODUCT_DESCRIPTION: 'Product 2 Description',
    ORIGINAL_PRICE: 200,
    DISCOUNT_PRICE: 160,
    DISCOUNT_RATE: 20
  },
  {
    key: '3',
    PRODUCT_ID: '3',
    PRODUCT_NAME: 'Product 3',
    PRODUCT_DESCRIPTION: 'Product 3 Description',
    ORIGINAL_PRICE: 300,
    DISCOUNT_PRICE: 240,
    DISCOUNT_RATE: 20
  }
];

const columns = [
  {
    title: 'Product ID',
    dataIndex: 'PRODUCT_ID', // database column name
    key: 'PRODUCT_ID', // key to distinguish each row
  },
  {
    title: 'Product Name',
    dataIndex: 'PRODUCT_NAME',
    key: 'PRODUCT_NAME',
  },
  {
    title: 'Product Description',
    dataIndex: 'PRODUCT_DESCRIPTION',
    key: 'PRODUCT_DESCRIPTION',
  },
  {
    title: 'Original Price',
    dataIndex: 'ORIGINAL_PRICE',
    key: 'ORIGINAL_PRICE',
  },
  {
    title: 'Discount Price',
    dataIndex: 'DISCOUNT_PRICE',
    key: 'DISCOUNT_PRICE',
  },
  {
    title: 'Discount Rate',
    dataIndex: 'DISCOUNT_RATE',
  }

];

const ProductTable = () => {

  useEffect(() => {
    const fetchProductTable = async () => {

      let { data: PRODUCT, error } = await supabase
        .from('PRODUCT')
        .select('*')
      if (error) console.log('error', error)
      else setData(PRODUCT)

    }
    fetchProductTable()

  }, []);
  const [data, setData] = useState<any>([]);
  return (
    <Table dataSource={data} columns={columns} /> 
  )
}

export default ProductTable