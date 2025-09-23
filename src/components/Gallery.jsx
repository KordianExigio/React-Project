export default function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <img
        src="/images/photo1.jpg"
        alt="Gallery 1"
        className="w-full h-64 object-cover rounded-xl"
      />
      <img
        src="/images/photo2.jpg"
        alt="Gallery 2"
        className="w-full h-64 object-cover rounded-xl"
      />
      <img
        src="/images/photo3.jpg"
        alt="Gallery 3"
        className="w-full h-64 object-cover rounded-xl"
      />
      <img
        src="/images/photo4.jpg"
        alt="Gallery 4"
        className="w-full h-64 object-cover rounded-xl"
      />
    </div>
  );
}
