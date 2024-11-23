import React, { useState } from 'react';
import { 
  Home, 
  PlusSquare, 
  List, 
  Users, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';
import BlogAdd from './Blogging_Component /BlogAdd';
import Lead_management from './Leads/Lead_management';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'addPost':
        return <BlogAdd />;
      case 'showPosts':
        return (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Posts</h2>
            <p className="text-gray-600">Post management content will go here.</p>
          </div>
        );
      case 'leadManagement':
        return (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lead Management</h2>
            <p className="text-gray-600">Lead tracking and management tools.</p>
            <Lead_management/>
          </div>
        );
      default:
        return (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Quick Stats</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Total Posts: 24</li>
                  <li className="text-gray-700">New Leads: 5</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Recent Activity</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">New post created</li>
                  <li className="text-gray-700">3 leads processed</li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  const SidebarItem = ({ icon, label, section }) => (
    <li 
      onClick={() => setActiveSection(section)} 
      className={`
        flex items-center p-3 cursor-pointer rounded-lg transition-all duration-200 
        ${activeSection === section 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
      `}
    >
      {icon}
      {isSidebarOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
    </li>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`
          ${isSidebarOpen ? 'w-64' : 'w-20'} 
          bg-white shadow-md transition-all duration-300 
          border-r border-gray-200 py-6 px-4
        `}
      >
        <div className="flex items-center justify-between mb-8">
          {isSidebarOpen && (
            <h3 className="text-xl font-bold text-gray-800">Admin Panel</h3>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        <ul className="space-y-2">
          <SidebarItem 
            icon={<Home size={20} />} 
            label="Dashboard Home" 
            section="welcome" 
          />
          <SidebarItem 
            icon={<PlusSquare size={20} />} 
            label="Add Post" 
            section="addPost" 
          />
          <SidebarItem 
            icon={<List size={20} />} 
            label="Show Posts" 
            section="showPosts" 
          />
          <SidebarItem 
            icon={<Users size={20} />} 
            label="Lead Management" 
            section="leadManagement" 
          />
        </ul>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default AdminDashboard;