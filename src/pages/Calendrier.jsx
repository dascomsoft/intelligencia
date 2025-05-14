
import React from "react";
export default function Calendrier() {
    return (
      <section className="p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Calendrier des rentrées</h1>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th className="border px-4 py-2">Session</th>
              <th className="border px-4 py-2">Début</th>
              <th className="border px-4 py-2">Fin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Septembre 2025</td>
              <td className="border px-4 py-2">10/09/2025</td>
              <td className="border px-4 py-2">10/12/2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Janvier 2026</td>
              <td className="border px-4 py-2">15/01/2026</td>
              <td className="border px-4 py-2">15/04/2026</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }