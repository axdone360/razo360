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

const AddLeadModal = ({ isOpen, onClose, onSave }) => {
  const [newLead, setNewLead] = useState({
    clientName: "",
    companyName: "",
    companyType: "",
    clientMsg: "",
    leadFrom: "",
    phoneNumber: "",
    clientIntersted: "",
    status: "",
    painPoint: "",
    meetPinPoint: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newLead);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Add New Lead</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="p-2 border rounded-lg"
                placeholder="Client Name"
                value={newLead.clientName}
                onChange={(e) =>
                  setNewLead({ ...newLead, clientName: e.target.value })
                }
              />
              <input
                className="p-2 border rounded-lg"
                placeholder="Company Name"
                value={newLead.companyName}
                onChange={(e) =>
                  setNewLead({ ...newLead, companyName: e.target.value })
                }
              />
              <input
                className="p-2 border rounded-lg"
                placeholder="Company Type"
                value={newLead.companyType}
                onChange={(e) =>
                  setNewLead({ ...newLead, companyType: e.target.value })
                }
              />
              <input
                className="p-2 border rounded-lg"
                placeholder="Phone Number"
                value={newLead.phoneNumber}
                onChange={(e) =>
                  setNewLead({ ...newLead, phoneNumber: e.target.value })
                }
              />

              <select
                className="p-2 border rounded-lg"
                value={newLead.leadFrom}
                onChange={(e) =>
                  setNewLead({ ...newLead, leadFrom: e.target.value })
                }
              >
                <option value="">Select Lead Source</option>
                {LEAD_FROM_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="p-2 border rounded-lg"
                value={newLead.status}
                onChange={(e) =>
                  setNewLead({ ...newLead, status: e.target.value })
                }
              >
                <option value="">Select Status</option>
                {STATUS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="p-2 border rounded-lg"
                value={newLead.clientIntersted}
                onChange={(e) =>
                  setNewLead({ ...newLead, clientIntersted: e.target.value })
                }
              >
                <option value="">Select Interest</option>
                {INTERESTED_IN_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              className="w-full p-2 border rounded-lg"
              placeholder="Client Message"
              value={newLead.clientMsg}
              onChange={(e) =>
                setNewLead({ ...newLead, clientMsg: e.target.value })
              }
              rows={3}
            />

            <textarea
              className="w-full p-2 border rounded-lg"
              placeholder="Pain Points"
              value={newLead.painPoint}
              onChange={(e) =>
                setNewLead({ ...newLead, painPoint: e.target.value })
              }
              rows={2}
            />

            <textarea
              className="w-full p-2 border rounded-lg"
              placeholder="Meeting Points"
              value={newLead.meetPinPoint}
              onChange={(e) =>
                setNewLead({ ...newLead, meetPinPoint: e.target.value })
              }
              rows={2}
            />

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save Lead
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Lead_management = () => {
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
        "http://localhost:3000/api/v1/lead/leadList"
      );
      console.log({ response });

      setLeads(response.data.Leads_List);
      setFilteredLeads(response.data.Leads_List);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  const handleAddLead = async (newLead) => {
    try {
      await axios.post("http://localhost:3000/api/v1/lead/create", newLead);
      fetchLeads();
    } catch (error) {
      console.error("Error adding lead:", error);
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
        `http://localhost:3000/api/v1/lead/updateLead/${editingLead.id}`,
        editingLead
      );
      fetchLeads();
      setEditingLead(null);
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/lead/delete/${id}`);
      fetchLeads();
    } catch (error) {
      console.error("Error deleting lead:", error);
    }
  };

  const renderLeadRow = (lead) => {
    if (editingLead && editingLead.id === lead.id) {
      return (
        <tr key={lead.id} className="bg-yellow-50">
          {Object.keys(lead).map((key) => (
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
          ))}
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
        {Object.values(lead).map((value, index) => (
          <td
            key={index}
            className="p-4 text-sm text-gray-700 break-words max-w-8"
          >
            {value?.length > 17 ? value : value || "N/A"}
          </td>
        ))}

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
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <Plus size={20} />
          Add Lead
        </button>
      </div>

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
            value={filters.leadFrom}
            onChange={(e) =>
              setFilters({ ...filters, leadFrom: e.target.value })
            }
            className="p-2 border rounded-lg"
          >
            <option value="">Filter by Source</option>
            {LEAD_FROM_OPTIONS.map((option) => (
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
                key="id"
                className="p-4 text-left text-sm font-medium text-gray-600"
              >
                Id
              </th>
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

      {isModalOpen && (
        <AddLeadModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddLead}
        />
      )}
    </div>
  );
};

export default Lead_management;
