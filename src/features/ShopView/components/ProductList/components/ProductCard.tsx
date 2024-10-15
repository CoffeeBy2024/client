import Image from 'next/image';

import no_photo from '@/../public/no_photo.jpeg';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <>
    <Image
      src={product.photo ? `data:image/jpeg;base64,${product.photo}` : no_photo}
      alt="product photo"
      width={150}
      height={150}
      className="w-80/100 mb-4 h-40 w-auto rounded-lg object-cover"
    />
    <h3 className="mb-2 text-lg font-semibold text-gray-800">{product.name}</h3>
    <p className="mb-2 text-center text-gray-600">{product.description}</p>
    <p className="font-bold text-green-600">${product.price}</p>
  </>
);

export default ProductCard;
