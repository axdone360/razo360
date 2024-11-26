import React, { useState } from 'react';
import { 
  Home, 
  PlusSquare, 
  List, 
  Users, 
  ChevronRight, 
  ChevronLeft ,
  MessageCircleDashed
} from 'lucide-react';
import BlogAdd from './Blogging_Component /BlogAdd';
import Lead_management from './Leads/Lead_management';
import BlogList from './Blogging_Component /BlogList';
import Contactlead from './Leads/contactlead';
import Dashboard from './Dashboard/dashboard';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('welcome');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeSection) {
      case 'addPost':
        return <BlogAdd />;
      case 'showPosts':
        return (
          <div className="bg-white h-full shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Posts</h2>
            <BlogList />
          </div>
        );
      case 'leadManagement':
        return (
          <div className="bg-white h-full shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lead Management</h2>
            <Lead_management/>
          </div>
        );
        case 'contactManagement':
          return (
            <div className="bg-white h-full shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Inquiries</h2>
              <Contactlead />
            </div>
          );
      default:
        return (
      
            <Dashboard/>
     
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
                    <SidebarItem 
            icon={<MessageCircleDashed size={20} />} 
            label="Client Inquiries" 
            section="contactManagement" 
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