import { useNavigate } from "react-router-dom";
import { PencilSimple, CopySimple, Trash } from "phosphor-react";

const actions = [PencilSimple, CopySimple, Trash];

const CVs = [
  { name: "cv1", created: "01/01/2025", updated: "01/01/2025" },
  { name: "cv2", created: "05/03/2025", updated: "06/04/2025" },
];

const TableRows = () => {
  const navigate = useNavigate();

  return (
    <tbody>
      {CVs.map((CV) => (
        <tr key={CV.name}>
          <td
            onClick={() => navigate("/")}
            className="cursor-pointer px-4 py-2 border hover:bg-stone-500"
          >
            {CV.name}
          </td>
          <td className="px-4 py-2 border">{CV.created}</td>
          <td className="px-4 py-2 border">{CV.updated}</td>
          <td className="px-4 py-2 border">
            <div className="flex items-center gap-2">
              {actions.map((Icon, index) => (
                <Icon key={index} className="w-5 h-5 cursor-pointer" />
              ))}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRows;
