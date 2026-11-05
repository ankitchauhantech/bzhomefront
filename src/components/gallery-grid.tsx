export function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={src} src={src} alt={`Gallery photo ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-md object-cover" />
      ))}
    </div>
  );
}
