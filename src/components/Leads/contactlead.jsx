import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Edit,
  Eye,
  Trash2,
  Filter,
  SearchIcon,
  Save,
  X,
  Plus,
  ChevronDown,
} from "lucide-react";

// Constants for select options
const STATUS_OPTIONS = ["Open", "Closed", "Expired", "Not Interested"];
const INTERESTED_IN_OPTIONS = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "Digital Marketing",
  "Cloud Services",
];
const LEAD_FROM_OPTIONS = [
  "Website",
  "Referral",
  "Social Media",
  "Direct",
  "Event",
];

1

const  Contactlead = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingLead, setEditingLead] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: "",
    leadFrom: "",
    clientIntersted: "",
  });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
   
      const response = await axios.get(
        `${import.meta.env.VITE_BACKENDSERVER}/lead/contactList`,{withCredentials:true}
      );
      
      setLeads(response.data.data);
      setFilteredLeads(response.data.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  

  useEffect(() => {
    let filtered = [...leads];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((lead) =>
        Object.values(lead).some((val) =>
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply dropdown filters
    if (filters.status) {
      filtered = filtered.filter((lead) => lead.status === filters.status);
    }
    if (filters.leadFrom) {
      filtered = filtered.filter((lead) => lead.leadFrom === filters.leadFrom);
    }
    if (filters.clientIntersted) {
      filtered = filtered.filter(
        (lead) => lead.clientIntersted === filters.clientIntersted
      );
    }

    setFilteredLeads(filtered);
  }, [searchTerm, filters, leads]);
  2;
  // ... (keep existing handleUpdate, handleSaveUpdate, handleDelete, and renderLeadRow functions)
  const handleUpdate = (lead) => {
    setEditingLead({ ...lead });
  };

  const handleSaveUpdate = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKENDSERVER}/lead/updateLead/${editingLead.id}`,
        editingLead,{withCredentials:true}
      );
      fetchLeads();
      setEditingLead(null);
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKENDSERVER}/lead/delete/${id}`,{withCredentials:true});
      fetchLeads();
    } catch (error) {
      console.error("Error deleting lead:", error);
    }
  };

  const renderLeadRow = (lead) => {
    if (editingLead && editingLead.id === lead.id) {
      return (
        <tr key={lead.id} className="bg-yellow-50">
          {Object.entries(lead).map(([key, value]) => {
            if (key === 'id'  || key === 'createdDate') return null;
            if (key === 'status') {
              return (
                <td key={key} className="p-2">
                  <select
                    value={editingLead[key] || ""}
                    onChange={(e) =>
                      setEditingLead({ ...editingLead, [key]: e.target.value })
                    }
                    className="w-full p-1 border rounded"
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              );
            }
            if (key === "leadFrom") {
              return (
                <td key={key} className="p-2">
                  {value || "N/A"}
                </td>
              );
            }
  
            if (key === 'clientIntersted') {
              return (
                <td key={key} className="p-2">
                  <select
                    value={editingLead[key] || ""}
                    onChange={(e) =>
                      setEditingLead({ ...editingLead, [key]: e.target.value })
                    }
                    className="w-full p-1 border rounded"
                  >
                    {INTERESTED_IN_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              );
            }
            return (
              <td key={key} className="p-2">
                <input
                  type="text"
                  value={editingLead[key] || ""}
                  onChange={(e) =>
                    setEditingLead({ ...editingLead, [key]: e.target.value })
                  }
                  className="w-full p-1 border rounded"
                />
              </td>
            );
          })}
          <td className="p-2 flex space-x-2">
            <button
              onClick={handleSaveUpdate}
              className="text-green-500 hover:bg-green-100 p-2 rounded-full"
            >
              <Save size={18} />
            </button>
            <button
              onClick={() => setEditingLead(null)}
              className="text-red-500 hover:bg-red-100 p-2 rounded-full"
            >
              <X size={18} />
            </button>
          </td>
        </tr>
      );
    }

    return (
      <tr key={lead.id} className="border-b hover:bg-gray-50 transition">
        {Object.entries(lead).map(([key, value]) => {
          if (key === 'id' || key==="createdDate") return null;
          return (
            <td
              key={key}
              className="p-4 text-sm text-gray-700 break-words max-w-8"
            >
              {value?.length > 17 ? value : value || "N/A"}
            </td>
          );
        })}
        <td className="p-4 flex items-center space-x-2">
          <button
            onClick={() => handleUpdate(lead)}
            className="text-blue-500 hover:bg-blue-100 p-2 rounded-full transition"
          >
            <Edit size={18} />
          </button>
          <button
            className="text-red-500 hover:bg-red-100 p-2 rounded-full transition"
            onClick={() => handleDelete(lead.id)}
          >
            <Trash2 size={18} />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="container mx-auto bg-white shadow-md rounded-lg overflow-hidden">
 

      <div className="p-4 bg-gray-100 border-b flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search all fields..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="p-2 border rounded-lg"
          >
            <option value="">Filter by Status</option>
            {STATUS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={filters.clientIntersted}
            onChange={(e) =>
              setFilters({ ...filters, clientIntersted: e.target.value })
            }
            className="p-2 border rounded-lg"
          >
            <option value="">Filter by Interest</option>
            {INTERESTED_IN_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Keep existing table structure */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
          
              <th
                key="clienName"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Client{" "}
              </th>
              <th
                key="companyName"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Company
              </th>
              <th
                key="companyType"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Company Category
              </th>
              <th
                key="clientMsg"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Client Message
              </th>
              <th
                key="leadFrom"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Lead From
              </th>
              <th
                key="phoneNumber"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Phone Number
              </th>
              <th
                key="clientIntersted"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Intersted IN
              </th>
              <th
                key="status"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Status
              </th>
              <th
                key="painPoint"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Pain Point
              </th>
              <th
                key="meetPinPoint"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Meeting Points
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{filteredLeads.map(renderLeadRow)}</tbody>
        </table>
      </div>

      {filteredLeads.length === 0 && (
        <div className="text-center p-8 text-gray-500">No leads found</div>
      )}

   
    </div>
  );
};

export default  Contactlead;
