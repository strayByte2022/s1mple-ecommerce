import { Button, Carousel, Image, Table } from 'antd';
import { title } from 'process';
import React, { useEffect, useState } from 'react'
import { supabase } from '@/utils';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';


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
    key: 'DISCOUNT_RATE',
  },
  {
    title: 'Image',
    dataIndex: 'THUMBNAIL',
    render: (_: any, urls: any) => {

      return <Carousel>
        <div>
          {urls.THUMBNAIL?.map((url: any) => {
            console.log('url', url)
            return <Image src={url} key={url} alt='thumbnail' width={'80px'} />
          }
          )}
        </div>

      </Carousel>


    },
    key: 'THUMBNAIL',
  },
  {
    title: 'Delete',
    dataIndex: 'PRODUCT_ID',
    render: (id: any) => {
      return <Button onClick={async () => {
        const { data, error } = await supabase
          .from('PRODUCT')
          .delete()
          .eq('PRODUCT_ID', id)
        if (error) console.log('error', error)
        else location.reload()
      }}>Delete</Button>
    }
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