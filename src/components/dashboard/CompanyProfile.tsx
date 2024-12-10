'use client';

import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

const CompanyProfile = () => {
  const { userProfile, updateProfile } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);

  if (!userProfile) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEditedProfile((prev) => ({
        ...prev!,
        [parent]: {
          ...prev![parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setEditedProfile((prev) => ({
        ...prev!,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    updateProfile(editedProfile!);
    setIsEditing(false);
  };

  const renderField = (label: string, name: string, value: string | number) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
        {isEditing ? (
          <input
            type="text"
            name={name}
            value={value}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        ) : (
          <p className="text-neutral-900">{value}</p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-neutral-900">Company Profile</h2>
        {isEditing ? (
          <div className="space-x-2">
            <button
              onClick={handleSave}
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedProfile(userProfile);
              }}
              className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Company Information</h3>
          {renderField('Company Name', 'companyName', editedProfile!.companyName)}
          {renderField('Industry', 'industry', editedProfile!.industry)}
          {renderField('Location', 'location', editedProfile!.location)}
          {renderField('Founded Year', 'foundedYear', editedProfile!.foundedYear)}
          {renderField('Employee Count', 'employeeCount', editedProfile!.employeeCount)}
        </div>

        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-4">Financial Information</h3>
          {renderField('Annual Revenue', 'annualRevenue', editedProfile!.annualRevenue)}
          {renderField('EBITDA', 'ebitda', editedProfile!.ebitda)}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-neutral-900 mb-4">Company Description</h3>
        {isEditing ? (
          <textarea
            name="description"
            value={editedProfile!.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        ) : (
          <p className="text-neutral-900">{editedProfile!.description}</p>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium text-neutral-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderField('Contact Name', 'contactPerson.name', editedProfile!.contactPerson.name)}
          {renderField('Position', 'contactPerson.position', editedProfile!.contactPerson.position)}
          {renderField('Email', 'contactPerson.email', editedProfile!.contactPerson.email)}
          {renderField('Phone', 'contactPerson.phone', editedProfile!.contactPerson.phone)}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
