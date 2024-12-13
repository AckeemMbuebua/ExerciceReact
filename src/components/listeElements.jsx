import { useState } from "react";

export default function ListeElement() {
  const [names, setNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Récupération de la valeur du champ Username
    const form = e.target.elements;
    const name = form.Username.value.trim();

    // Vérifier si le champ est vide après suppression des espaces
    if (!name) return;

    // Séparation du nom en différentes parties
    const splitName = name.split(" ");

    // Création de l'objet identite
    const identite = {
      Prenom: splitName[0],
      Nom: splitName[1] || "",
      PostNom: splitName[2] || "",
    };

    // Mise à jour de l'état names avec le nouvel objet
    setNames((prev) => [...prev, identite]);

    // Réinitialisation du champ du formulaire
    form.Username.value = "";
  };

  const handleClick = (index) => {
    // Mise à jour de la liste en supprimant l'élément à l'index spécifié
    const updatedItems = names.filter((_, i) => i !== index);
    setNames(updatedItems);
  };

  return (
    <div>
      <div className="space-y-3">
        <div className="overflow-x-auto">
          <table className="table">
            {/* En-tête */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Prénom</th>
                <th>Nom</th>
                <th>PostNom</th>
              </tr>
            </thead>
            <tbody>
              {/* Affichage des noms */}
              {names.map((nom, index) => (
                <tr
                  key={index}
                  onClick={() => handleClick(index)}
                  className="bg-base-200 cursor-pointer"
                  title="Cliquez pour supprimer"
                >
                  <th>{index + 1}</th>
                  <td>{nom.Prenom}</td>
                  <td>{nom.Nom}</td>
                  <td>{nom.PostNom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="Username"
              className="grow"
              placeholder="Nom complet"
              required
            />
          </label>
          <button type="submit" className="btn btn-primary w-full">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}
