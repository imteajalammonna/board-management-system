'use client';

import FormSection from "@/components/sections/form/FormSection";
import FormWrapper from "@/components/sections/form/FormWrapper";
import InputSelectWrapper from "@/components/sections/form/InputSelectWrapper";
import InputWrapper from "@/components/sections/form/InputWrapper";
import TextAreaWrapper from "@/components/sections/form/TextAreaWrapper";
import { useState, useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { ClipLoader } from 'react-spinners';
import { districts, divisions, policeStations, upazilas, zones } from "./locationData";
import InputSelectWrapperExtended from "@/components/sections/form/InputSelectWrapperExtended";

type TField = {
    name: string;
    label: string;
    placeholder: string;
    type: "text" | "password" | "email" | "number" | "tel";
};

const contactInfoFields: TField[] = [
    {
        name: "communicatorName",
        label: "যোগাযোগকারীর নাম",
        placeholder: "নাম লিখুন",
        type: "text",
    },
    {
        name: "communicatorContactNo",
        label: "যোগাযোগ-১",
        placeholder: "মোবাইল নম্বর লিখুন",
        type: "tel",
    },
    {
        name: "contact2",
        label: "যোগাযোগ-২",
        placeholder: "মোবাইল নম্বর লিখুন",
        type: "tel",
    },
    {
        name: "email",
        label: "ইমেইল",
        placeholder: "ইমেইল লিখুন",
        type: "email",
    },
];

const nameFields: TField[] = [
    {
        name: "nameInBangla",
        label: "বাংলা নাম",
        placeholder: "বাংলা নাম লিখুন",
        type: "text",
    },
    {
        name: "nameInArabic",
        label: "আরবি নাম",
        placeholder: "আরবি নাম লিখুন",
        type: "text",
    },
    {
        name: "nameInEnglish",
        label: "ইংরেজি নাম (ঐচ্ছিক)",
        placeholder: "ইংরেজি নাম লিখুন",
        type: "text",
    },
];

const marhalaOptions: string[] = [
    "ইফতা",
    "তাকমীল/দাওরায়ে হাদীস",
    "ফযীলত (স্নাতক)",
    "সানাবিয়্যাহ উলইয়া",
    "কাফিয়া (১০ শ্রেনী)",
    "মুতাওয়াসসিতাহ (৮ম শ্রেনী)",
    "ইবতেদাইয়্যাহ (৫ম শ্রেনী)",
];

const madrasahTypes: string[] = [
    "বালক",
    "বালিকা",
];

export default function RegisterMadrasah() {
    const [locationInfo, setLocationInfo] = useState({
        division: "",
        district: "",
        upazila: "",
        policeStation: "",
        postOffice: "",
        village: "",
    });
    console.log(locationInfo);

    const handleLocationInfoChange = (field: string, value: string) => {
        setLocationInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

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
        setLocationInfo(prev => ({
            ...prev,
            district: "",
            upazila: "",
            policeStation: "",
            postOffice: "",
            village: "",
        }));
    }, [locationInfo.division]);

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            upazila: '',
            policeStation: ''
        }));
    }, [locationInfo.district]);

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            policeStation: ''
        }));
    }, [formData.upazila]);

    const handleSubmit = (values: FieldValues) => {
        console.log(values);
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="lg:p-4 p-2">
            <div className="w-full mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900">মাদরাসা নিবন্ধন</h1>
                    <p className="mt-2 text-sm text-gray-600">নতুন মাদরাসা নিবন্ধনের জন্য তথ্য পূরণ করুন</p>
                </div>

                <FormWrapper onSubmit={handleSubmit}>
                    <div className="lg:space-y-8 space-y-6 bg-white lg:p-8 p-4 rounded-lg shadow">
                        {/* Madrasah Names */}
                        <FormSection
                            title="মাদরাসার নাম"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            {
                                nameFields.map((field) => (
                                    <InputWrapper
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        type={field.type}
                                    />
                                ))
                            }
                            <div className="sm:col-span-3">
                                <TextAreaWrapper
                                    name="description"
                                    label="বর্ণনা"
                                    placeholder="মাদরাসার বর্ণনা লিখুন"
                                />
                            </div>
                        </FormSection>

                        {/* Contact Information */}
                        <FormSection
                            title="যোগাযোগ বিষয়ক তথ্য"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                        >
                            {
                                contactInfoFields.map((field) => (
                                    <InputWrapper
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        type={field.type}
                                    />
                                ))
                            }
                        </FormSection>

                        {/* Madrasah Information */}
                        <FormSection
                            title="মাদ্রাসার সার্বিক তথ্য"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            <InputSelectWrapper
                                name="highestMarhala"
                                label="সর্বোচ্চ মারহালা"
                                placeholder="মারহালা নির্বাচন করুন"
                                items={marhalaOptions}
                            />
                            <InputSelectWrapper
                                name="madrasahType"
                                label="মাদরাসার ধরণ"
                                placeholder="মাদরাসার ধরণ নির্বাচন করুন"
                                items={madrasahTypes}
                            />
                            <InputWrapper
                                name="totalStudent"
                                label="মোট শিক্ষার্থী"
                                placeholder="মোট শিক্ষার্থী সংখ্যা লিখুন"
                                type="number"
                            />
                            <InputWrapper
                                name="totalTeacherAndStaff"
                                label="মোট শিক্ষক/শিক্ষিকা"
                                placeholder="মোট শিক্ষক/শিক্ষিকা সংখ্যা"
                                type="number"
                            />
                        </FormSection>

                        {/* Location Information */}
                        <FormSection
                            title="ঠিকানার তথ্য"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            <InputSelectWrapperExtended
                                name="division"
                                label="বিভাগ"
                                placeholder="বিভাগ নির্বাচন করুন"
                                items={divisions}
                                handler={handleLocationInfoChange}
                            />
                            <InputSelectWrapperExtended
                                name="district"
                                label="জেলা"
                                placeholder="জেলা নির্বাচন করুন"
                                items={(districts as any)[locationInfo.division]}
                                handler={handleLocationInfoChange}
                                disabled={!locationInfo.division}
                            />
                            <InputSelectWrapperExtended
                                name="upazila"
                                label="উপজেলা"
                                placeholder="উপজেলা নির্বাচন করুন"
                                items={(upazilas as any)[locationInfo.district]}
                                handler={handleLocationInfoChange}
                                disabled={!locationInfo.district}
                            />
                            <InputSelectWrapperExtended
                                name="policeStation"
                                label="থানা"
                                placeholder="থানা নির্বাচন করুন"
                                items={(policeStations as any)[locationInfo.upazila]}
                                handler={handleLocationInfoChange}
                                disabled={!locationInfo.upazila}
                            />
                            <InputWrapper
                                name="village"
                                label="গ্রাম/মহল্লা"
                                placeholder="গ্রাম/মহল্লার নাম লিখুন"
                            />
                            <InputWrapper
                                name="postOffice"
                                label="ডাকঘর"
                                placeholder="ডাকঘরের নাম লিখুন"
                            />
                            <InputWrapper
                                name="holdingNumber"
                                label="হোল্ডিং নম্বর"
                                placeholder="হোল্ডিং নম্বর লিখুন"
                            />
                            <InputSelectWrapper
                                name="zone"
                                label="জোন"
                                placeholder="জোন নম্বর নির্বাচন করুন"
                                items={zones}
                            />
                            <InputSelectWrapper
                                name="zone"
                                label="চিঠি প্রেরনের মাধ্যম"
                                placeholder="চিঠি প্রেরনের মাধ্যম নির্বাচন করুন"
                                items={["ডাক", "কুরিয়ার"]}
                            />
                        </FormSection>

                        {/* Muhtamim Information */}
                        <FormSection
                            title="মুহতামিমের তথ্য"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
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
                        </FormSection>

                        {/* Shikkha Socheeb Information */}
                        <FormSection
                            title="শিক্ষা সচিব"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
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
                        </FormSection>

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
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
};

