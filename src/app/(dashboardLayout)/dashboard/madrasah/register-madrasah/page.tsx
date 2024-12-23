'use client';

import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

export default function RegisterMadrasah() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        communicatorName: '',
        communicatorContactNo: '',
        contact2: '',
        zone: '',
        email: '',
        nameInArabic: '',
        nameInBangla: '',
        nameInEnglish: '',
        description: '',
        highestMarhala: '',
        totalStudent: '',
        totalTeacherAndStaff: '',
        madrasahType: '',
        muhtamimName: '',
        muhtamimNID: '',
        muhtamimMobile: '',
        muhtamimEducation: '',
        muhtamimPhoto: null as File | null,
        year: '',
        distric: '',
        division: '',
        holdingNumber: '',
        policeStation: '',
        postOffice: '',
        village: '',
        courierOption: '',
        logo: null as File | null,
        upazila: '',
        shikkhaSocheebName: '',
        shikkhaSocheebNID: '',
        shikkhaSocheebMobile: '',
        shikkhaSocheebEducation: '',
        shikkhaSocheebPhoto: null as File | null,
        shovapotiName: '',
        shovapotiNID: '',
        shovapotiMobile: '',
        shovapotiPosition: '',
        shovapotiPhoto: null as File | null,
    });

    useEffect(() => {
        // Reset dependent fields when parent field changes
        setFormData(prev => ({
            ...prev,
            distric: '',
            upazila: '',
            policeStation: ''
        }));
    }, [formData.division]);

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            upazila: '',
            policeStation: ''
        }));
    }, [formData.distric]);

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            policeStation: ''
        }));
    }, [formData.upazila]);

    const handleSubmit = async (e: React.FormEvent) => {

    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="p-4 mt-12">
            <div className="w-full md:w-[80%] mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">মাদরাসা নিবন্ধন</h1>
                    <p className="mt-2 text-sm text-gray-600">নতুন মাদরাসা নিবন্ধনের জন্য তথ্য পূরণ করুন</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
                    {/* Madrasah Names */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">মাদরাসার নাম</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">বাংলা নাম</label>
                                <input
                                    type="text"
                                    placeholder="বাংলা নাম লিখুন"
                                    value={formData.nameInBangla}
                                    onChange={(e) => handleChange('nameInBangla', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">আরবি নাম</label>
                                <input
                                    type="text"
                                    placeholder="আরবি নাম লিখুন"
                                    value={formData.nameInArabic}
                                    onChange={(e) => handleChange('nameInArabic', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ইংরেজি নাম (ঐচ্ছিক)</label>
                                <input
                                    type="text"
                                    placeholder="ইংরেজি নাম লিখুন"
                                    value={formData.nameInEnglish}
                                    onChange={(e) => handleChange('nameInEnglish', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">বর্ণনা</label>
                                <textarea
                                    placeholder="মাদরাসার বর্ণনা লিখুন"
                                    value={formData.description}
                                    onChange={(e) => handleChange('description', e.target.value)}
                                    rows={4}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">যোগাযোগ বিষয়ক তথ্য</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">যোগাযোগকারীর নাম</label>
                                <input
                                    type="text"
                                    placeholder="নাম লিখুন"
                                    value={formData.communicatorName}
                                    onChange={(e) => handleChange('communicatorName', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">যোগাযোগ-১</label>
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর লিখুন"
                                    value={formData.communicatorContactNo}
                                    onChange={(e) => handleChange('communicatorContactNo', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">যোগাযোগ-২</label>
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর লিখুন"
                                    value={formData.contact2}
                                    onChange={(e) => handleChange('contact2', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ইমেইল</label>
                                <input
                                    type="email"
                                    placeholder="ইমেইল লিখুন"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Madrasah Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">মাদ্রাসার সার্বিক তথ্য</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">সর্বোচ্চ মারহালা</label>
                                <select
                                    value={formData.highestMarhala}
                                    onChange={(e) => handleChange('highestMarhala', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                >
                                    <option value="">মারহালা নির্বাচন করুন</option>
                                    <option value="ইফতা">ইফতা</option>
                                    <option value="তাকমীল/দাওরায়ে হাদীস">তাকমীল/দাওরায়ে হাদীস</option>
                                    <option value="ফযীলত (স্নাতক)">ফযীলত (স্নাতক)</option>
                                    <option value="সানাবিয়্যাহ উলইয়া">সানাবিয়্যাহ উলইয়া</option>
                                    <option value="কাফিয়া (১০ শ্রেনী)">কাফিয়া (১০ শ্রেনী)</option>
                                    <option value="মুতাওয়াসসিতাহ (৮ম শ্রেনী)">মুতাওয়াসসিতাহ (৮ম শ্রেনী)</option>
                                    <option value="ইবতেদাইয়্যাহ (৫ম শ্রেনী)">ইবতেদাইয়্যাহ (৫ম শ্রেনী)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মাদরাসার ধরণ</label>
                                <select
                                    value={formData.madrasahType}
                                    onChange={(e) => handleChange('madrasahType', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                >
                                    <option value="">মাদরাসার ধরণ নির্বাচন করুন</option>
                                    <option value="BOY">বালক</option>
                                    <option value="GIRL">বালিকা</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মোট শিক্ষার্থী</label>
                                <input
                                    type="number"
                                    placeholder="মোট শিক্ষার্থী সংখ্যা লিখুন"
                                    value={formData.totalStudent}
                                    onChange={(e) => handleChange('totalStudent', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মোট শিক্ষক/শিক্ষিকা</label>
                                <input
                                    type="number"
                                    placeholder="মোট শিক্ষক/শিক্ষিকা সংখ্যা"
                                    value={formData.totalTeacherAndStaff}
                                    onChange={(e) => handleChange('totalTeacherAndStaff', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Location Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">ঠিকানার তথ্য</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">বিভাগ</label>
                                <select
                                    value={formData.division}
                                    onChange={(e) => handleChange('division', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                >
                                    <option value="">বিভাগ নির্বাচন করুন</option>

                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">জেলা</label>
                                <select
                                    value={formData.distric}
                                    onChange={(e) => handleChange('distric', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                    disabled={!formData.division}
                                >
                                    <option value="">জেলা নির্বাচন করুন</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">উপজেলা</label>
                                <select
                                    value={formData.upazila}
                                    onChange={(e) => handleChange('upazila', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                    disabled={!formData.distric}
                                >
                                    <option value="">উপজেলা নির্বাচন করুন</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">থানা</label>
                                <select
                                    value={formData.policeStation}
                                    onChange={(e) => handleChange('policeStation', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                    disabled={!formData.upazila}
                                >
                                    <option value="">থানা নির্বাচন করুন</option>

                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">গ্রাম/মহল্লা</label>
                                <input
                                    type="text"
                                    placeholder="গ্রাম/মহল্লার নাম লিখুন"
                                    value={formData.village}
                                    onChange={(e) => handleChange('village', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ডাকঘর</label>
                                <input
                                    type="text"
                                    placeholder="ডাকঘরের নাম লিখুন"
                                    value={formData.postOffice}
                                    onChange={(e) => handleChange('postOffice', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">হোল্ডিং নম্বর</label>
                                <input
                                    type="text"
                                    placeholder="হোল্ডিং নম্বর লিখুন"
                                    value={formData.holdingNumber}
                                    onChange={(e) => handleChange('holdingNumber', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">জোন</label>
                                <input
                                    type="text"
                                    placeholder="জোন নম্বর লিখুন"
                                    value={formData.zone}
                                    onChange={(e) => handleChange('zone', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">চিঠি প্রেরনের মাধ্যম</label>
                                <select
                                    value={formData.courierOption}
                                    onChange={(e) => handleChange('courierOption', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                >
                                    <option value="">প্রেরনের মাধ্যম নির্বাচন করুন</option>
                                    <option value="ডাক">ডাক</option>
                                    <option value="কুরিয়ার">কুরিয়ার</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Muhtamim Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">মুহতামিমের তথ্য</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মুহতামিমের নাম</label>
                                <input
                                    type="text"
                                    placeholder="মুহতামিমের নাম লিখুন"
                                    value={formData.muhtamimName}
                                    onChange={(e) => handleChange('muhtamimName', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">জাতীয় পরিচয়পত্র</label>
                                <input
                                    type="text"
                                    placeholder="এনআইডি নম্বর লিখুন"
                                    value={formData.muhtamimNID}
                                    onChange={(e) => handleChange('muhtamimNID', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মোবাইল</label>
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর লিখুন"
                                    value={formData.muhtamimMobile}
                                    onChange={(e) => handleChange('muhtamimMobile', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">শিক্ষাগত যোগ্যতা</label>
                                <input
                                    type="text"
                                    placeholder="শিক্ষাগত যোগ্যতা লিখুন"
                                    value={formData.muhtamimEducation}
                                    onChange={(e) => handleChange('muhtamimEducation', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ছবি</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        setFormData(prev => ({ ...prev, muhtamimPhoto: file }));
                                    }}
                                    className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                                />
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    সর্বোচ্চ সাইজঃ ৩০০ কেবি
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Shikkha Socheeb Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">শিক্ষা সচিব</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">নাম</label>
                                <input
                                    type="text"
                                    placeholder="নাম লিখুন"
                                    value={formData.shikkhaSocheebName}
                                    onChange={(e) => handleChange('shikkhaSocheebName', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">জাতীয় পরিচয়পত্র</label>
                                <input
                                    type="text"
                                    placeholder="এনআইডি নম্বর লিখুন"
                                    value={formData.shikkhaSocheebNID}
                                    onChange={(e) => handleChange('shikkhaSocheebNID', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মোবাইল</label>
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর লিখুন"
                                    value={formData.shikkhaSocheebMobile}
                                    onChange={(e) => handleChange('shikkhaSocheebMobile', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">শিক্ষাগত যোগ্যতা</label>
                                <input
                                    type="text"
                                    placeholder="শিক্ষাগত যোগ্যতা লিখুন"
                                    value={formData.shikkhaSocheebEducation}
                                    onChange={(e) => handleChange('shikkhaSocheebEducation', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ছবি</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        setFormData(prev => ({ ...prev, shikkhaSocheebPhoto: file }));
                                    }}
                                    className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                                />
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    সর্বোচ্চ সাইজঃ ৩০০ কেবি
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Shovapoti Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">সভাপতি /মুতাওয়াল্লি</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">নাম</label>
                                <input
                                    type="text"
                                    placeholder="নাম লিখুন"
                                    value={formData.shovapotiName}
                                    onChange={(e) => handleChange('shovapotiName', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">এনআইডি নম্বর</label>
                                <input
                                    type="text"
                                    placeholder="এনআইডি নম্বর লিখুন"
                                    value={formData.shovapotiNID}
                                    onChange={(e) => handleChange('shovapotiNID', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">মোবাইল</label>
                                <input
                                    type="tel"
                                    placeholder="মোবাইল নম্বর লিখুন"
                                    value={formData.shovapotiMobile}
                                    onChange={(e) => handleChange('shovapotiMobile', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">পদবী</label>
                                {/* <input
                  type="text"
                  placeholder="পদবী লিখুন"
                  value={formData.shovapotiPosition}
                  onChange={(e) => handleChange('shovapotiPosition', e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                /> */}

                                <select
                                    value={formData.madrasahType}
                                    onChange={(e) => handleChange('madrasahType', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                >
                                    <option value="">পদবী নির্বাচন করুন</option>
                                    <option value="BOY">সভাপতি</option>
                                    <option value="GIRL">মুতাওয়াল্লি</option>
                                </select>

                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ছবি</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        setFormData(prev => ({ ...prev, shovapotiPhoto: file }));
                                    }}
                                    className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                                />
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    সর্বোচ্চ সাইজঃ ৩০০ কেবি
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Logo Upload */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">মাদরাসার লোগো আপলোড</h2>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">মাদরাসার লোগো</label>
                            <div className="space-y-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    formEncType="multipart/form-data"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0] || null;
                                        setFormData(prev => ({ ...prev, logo: file }));
                                    }}
                                    className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                                />
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    সর্বোচ্চ সাইজঃ ৩০০ কেবি
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-600 to-green-700 px-8 py-3 text-base font-medium text-white shadow-sm hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-[600px]"
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <ClipLoader size={20} color="#ffffff" />
                                    <span>প্রক্রিয়াজাত হচ্ছে...</span>
                                </div>
                            ) : (
                                'জমা দিন'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

