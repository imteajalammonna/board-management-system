'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MdEdit, MdDelete, MdSearch } from 'react-icons/md';
import { FaSchool, FaMapMarkerAlt, FaUserGraduate } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

export default function AllMadrasahPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Filter States
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // Handle loading and error states
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <ClipLoader color="#4F46E5" size={50} />
                <p className="ml-4 text-lg text-gray-600">লোড হচ্ছে...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-600 text-lg">সমস্যা হয়েছে: {error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                    আবার চেষ্টা করুন
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 mt-10 w-11/12 mx-auto">

            <h1 className="text-2xl font-bold mb-2">সকল মাদরাসা</h1>
            <p className="text-gray-600 mb-6">আপনার সকল মাদরাসার তালিকা এখানে রয়েছে</p>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-[#52b788] mb-1 flex items-center">
                            <FaSchool className="mr-1 text-sm" />
                            বিভাগ
                        </label>
                        <select
                            value={selectedDivision}
                            onChange={(e) => {
                                setSelectedDivision(e.target.value);
                                setSelectedDistrict('');
                            }}
                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-[#52b788] focus:border-[#52b788]"
                        >
                            <option value="">সকল বিভাগ</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-[#52b788] mb-1 flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-sm" />
                            জেলা
                        </label>
                        <select
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-[#52b788] focus:border-[#52b788]"
                            disabled={!selectedDivision}
                        >
                            <option value="">সকল জেলা</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-[#52b788] mb-1 flex items-center">
                            <FaUserGraduate className="mr-1 text-sm" />
                            মাদরাসার ধরন
                        </label>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-[#52b788] focus:border-[#52b788]"
                        >
                            <option value="">সকল ধরন</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-[#52b788] mb-1 flex items-center">
                            <MdSearch className="mr-1 text-sm" />
                            মাদরাসার নাম / আইডি
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="অনুসন্ধান করুন..."
                                className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-[#52b788] focus:border-[#52b788]"
                            />
                            <MdSearch className="absolute left-2.5 top-2 text-gray-400 text-sm" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="min-w-full">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#52b788]">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">মাদরাসা</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">মাদরাসা আইডি</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">মাদরাসার ধরণ</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">ঠিকানা</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">ইমেইল</th>
                                <th className="px-6 py-4 text-left text-sm font-medium text-white">মোবাইল</th>
                                <th className="px-6 py-4 text-center text-sm font-medium text-white">ক্রিয়াকলাপ</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <Image
                                                width={40}
                                                height={40}
                                                className="h-10 w-10 rounded-full"
                                                src=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">name</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    1324234
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    balok
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    adreesss
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    015544656
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    email@gmail
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            className="flex items-center text-[#52b788] hover:bg-[#52b788]/10 px-2 py-1 rounded"
                                        >
                                            <MdEdit className="text-lg mr-1" />
                                            <span>সম্পাদনা করুন</span>
                                        </button>
                                        <button
                                            className="flex items-center text-red-500 hover:bg-red-500/10 px-2 py-1 rounded"
                                        >
                                            <MdDelete className="text-lg mr-1" />
                                            <span>মুছে ফেলুন</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 px-4">
                <div className="text-sm text-gray-600">
                    মোট মাদরাসা: <span className="font-medium">12</span>
                </div>
                <div className="flex items-center gap-8">
                    <div className="text-sm text-gray-600">
                        পৃষ্ঠা {currentPage} / 6
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-sm font-medium text-[#52b788] bg-white border border-[#52b788] rounded hover:bg-[#52b788] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            পূর্ববর্তী
                        </button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-white bg-[#52b788] border border-[#52b788] rounded hover:bg-[#52b788]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            পরবর্তী
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
