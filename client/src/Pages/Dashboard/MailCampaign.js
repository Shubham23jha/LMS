import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import axiosInstance from "../../Helper/axiosInstance";

const MailCampaign = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/user");
      if (response?.data?.success) {
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
      }
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let result = users;
    if (roleFilter !== "ALL") {
      result = result.filter((u) => u.role === roleFilter);
    }
    if (statusFilter !== "ALL") {
      result = result.filter((u) => u.subscription?.status === (statusFilter === "ACTIVE" ? "active" : "inactive"));
    }
    setFilteredUsers(result);
  }, [roleFilter, statusFilter, users]);

  const toggleSelectAll = () => {
    if (selectedEmails.length === filteredUsers.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(filteredUsers.map((u) => u.email));
    }
  };

  const toggleSelectUser = (email) => {
    if (selectedEmails.includes(email)) {
      setSelectedEmails(selectedEmails.filter((e) => e !== email));
    } else {
      setSelectedEmails([...selectedEmails, email]);
    }
  };

  const handleSendCampaign = async (e) => {
    e.preventDefault();
    if (selectedEmails.length === 0 || !subject || !body) {
      toast.error("Please select users and fill all fields");
      return;
    }

    try {
      const response = await axiosInstance.post("/admin/email-campaign", {
        emails: selectedEmails,
        subject,
        body,
      });
      if (response?.data?.success) {
        toast.success("Campaign initiated successfully");
        setSubject("");
        setBody("");
        setSelectedEmails([]);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send campaign");
    }
  };

  return (
    <Layout>
      <div className="min-h-[90vh] pt-10 flex flex-col items-center gap-10 text-white mx-[5%]">
        <h1 className="text-3xl font-semibold text-yellow-500">Email Campaign Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {/* Left Section: User Selection */}
          <div className="flex flex-col gap-5 p-5 shadow-lg rounded-md bg-gray-800 bg-opacity-50">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Target Users ({selectedEmails.length}/{filteredUsers.length} selected)</h2>
              <div className="flex gap-2">
                <select 
                  className="bg-transparent border p-1 rounded text-sm outline-none cursor-pointer text-white"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="ALL" className="bg-gray-800">All Roles</option>
                  <option value="USER" className="bg-gray-800">Users</option>
                  <option value="ADMIN" className="bg-gray-800">Admins</option>
                </select>
                <select 
                  className="bg-transparent border p-1 rounded text-sm outline-none cursor-pointer text-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="ALL" className="bg-gray-800">All Status</option>
                  <option value="ACTIVE" className="bg-gray-800">Active</option>
                  <option value="INACTIVE" className="bg-gray-800">Inactive</option>
                </select>
              </div>
            </div>

            <div className="max-h-[50vh] overflow-y-auto border border-gray-600 rounded">
              <table className="table w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="p-2">
                      <input type="checkbox" checked={selectedEmails.length === filteredUsers.length && filteredUsers.length > 0} onChange={toggleSelectAll} />
                    </th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user._id} className="border-b border-gray-700 hover:bg-gray-700 transition-all">
                      <td className="p-2">
                        <input type="checkbox" checked={selectedEmails.includes(user.email)} onChange={() => toggleSelectUser(user.email)} />
                      </td>
                      <td className="p-2 capitalize">{user.fullName}</td>
                      <td className="p-2">{user.email}</td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan="3" className="text-center p-4">No users found with these filters</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Section: Compose Email */}
          <form 
            onSubmit={handleSendCampaign}
            className="flex flex-col gap-5 p-5 shadow-lg rounded-md bg-gray-800 bg-opacity-50"
          >
            <h2 className="text-xl font-bold">Compose Campaign</h2>
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="font-semibold text-yellow-500">Subject</label>
              <input 
                type="text"
                id="subject"
                placeholder="Enter campaign subject"
                className="bg-transparent border px-3 py-2 rounded focus:border-yellow-500 outline-none"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="body" className="font-semibold text-yellow-500">Message (HTML Supported)</label>
              <textarea 
                id="body"
                placeholder="Compose your message here..."
                className="bg-transparent border px-3 py-2 rounded h-64 resize-none focus:border-yellow-500 outline-none"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="mt-2 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 font-bold py-2 rounded text-lg"
            >
              Send Campaign
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default MailCampaign;
