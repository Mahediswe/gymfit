import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    fetch(`https://gymfit-backend.vercel.app/api/trainers/${id}`)
      .then(res => res.json())
      .then(data => setTrainer(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!trainer) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full md:w-1/3 h-[400px] object-cover rounded-lg shadow"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{trainer.name}</h2>
          <p className="text-green-600 text-lg mb-4">{trainer.role}</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            {trainer.bio || "This trainer's bio will be added soon."}
          </p>
          {trainer.experience && (
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Experience:</span> {trainer.experience}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
