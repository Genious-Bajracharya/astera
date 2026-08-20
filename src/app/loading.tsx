import './loading.css';

export default function Loading() {
  return (
    <div className="spinner-wrapper">
      <span className="loader"></span>
      <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  );
}