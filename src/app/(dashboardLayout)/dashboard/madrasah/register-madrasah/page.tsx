'use client';

import FormSection from "@/components/sections/form/FormSection";
import FormWrapper from "@/components/sections/form/FormWrapper";
import InputSelectWrapper from "@/components/sections/form/InputSelectWrapper";
import InputWrapper from "@/components/sections/form/InputWrapper";
import TextAreaWrapper from "@/components/sections/form/TextAreaWrapper";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { ClipLoader } from 'react-spinners';
import { contactInfoFields, districts, divisions, marhalaOptions, nameFields, policeStations, upazilas, zones } from "./data";
import InputSelectWrapperExtended from "@/components/sections/form/InputSelectWrapperExtended";
import FileUploaderWrapper from "@/components/sections/form/FileUploaderWrapper";
import { Button } from "@mui/material";

const RegisterMadrasah = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [locationInfo, setLocationInfo] = useState({
        division: "",
        district: "",
        upazila: "",
        policeStation: ""
    });

    const handleLocationInfoChange = (field: string, value: string) => {
        setLocationInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (values: FieldValues) => {
        console.log({ ...values, ...locationInfo });
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
                                nameFields.map((field, idx) => (
                                    <InputWrapper
                                        key={idx}
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
                            <FileUploaderWrapper
                                name="logo"
                                label="মাদরাসার লোগো আপলোড করুন"
                            />
                        </FormSection>

                        {/* Contact Information */}
                        <FormSection
                            title="যোগাযোগ বিষয়ক তথ্য"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                        >
                            {
                                contactInfoFields.map((field, idx) => (
                                    <InputWrapper
                                        key={idx}
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
                                items={["বালক", "বালিকা"]}
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
                            <InputWrapper
                                name="muhtamimName"
                                label="মুহতামিমের নাম"
                                placeholder="মুহতামিমের নাম লিখুন"
                            />
                            <InputWrapper
                                name="muhtamimNID"
                                label="জাতীয় পরিচয়পত্র"
                                placeholder="এনআইডি নম্বর লিখুন"
                            />
                            <InputWrapper
                                name="muhtamimMobile"
                                label="মোবাইল"
                                placeholder="মোবাইল নম্বর লিখুন"
                            />
                            <InputWrapper
                                name="muhtamimEducation"
                                label="শিক্ষাগত যোগ্যতা"
                                placeholder="শিক্ষাগত যোগ্যতা লিখুন"
                            />
                            <FileUploaderWrapper
                                name="muhtamimPhoto"
                            />
                        </FormSection>

                        {/* Shikkha Socheeb Information */}
                        <FormSection
                            title="শিক্ষা সচিব"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            <InputWrapper
                                name="shikkhaSocheebName"
                                label="নাম"
                                placeholder="নাম লিখুন"
                            />
                            <InputWrapper
                                name="shikkhaSocheebNID"
                                label="জাতীয় পরিচয়পত্র"
                                placeholder="জাতীয় পরিচয়পত্র নম্বর লিখুন"
                            />
                            <InputWrapper
                                name="shikkhaSocheebMobile"
                                label="মোবাইল"
                                placeholder="মোবাইল নম্বর লিখুন"
                            />
                            <InputWrapper
                                name="shikkhaSocheebEducation"
                                label="শিক্ষাগত যোগ্যতা"
                                placeholder="শিক্ষাগত যোগ্যতা লিখুন"
                            />
                            <FileUploaderWrapper
                                name="shikkhaSocheebPhoto"
                            />
                        </FormSection>

                        {/* Shovapoti Information */}
                        <FormSection
                            title="সভাপতি /মুতাওয়াল্লি"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            <InputWrapper
                                name="shovapotiName"
                                label="নাম"
                                placeholder="নাম লিখুন"
                            />
                            <InputWrapper
                                name="shovapotiNID"
                                label="জাতীয় পরিচয়পত্র নম্বর"
                                placeholder="জাতীয় পরিচয়পত্র নম্বর লিখুন"
                            />
                            <InputWrapper
                                name="shovapotiMobile"
                                label="মোবাইল"
                                placeholder="মোবাইল নম্বর লিখুন"
                            />
                            <InputSelectWrapper
                                name="shovapotiPosition"
                                label="পদবী"
                                placeholder="পদবী নির্বাচন করুন"
                                items={["সভাপতি", "মুতাওয়াল্লি"]}
                            />
                            <FileUploaderWrapper
                                name="shovapotiPhoto"
                            />
                        </FormSection>

                        {/* Submit Button */}
                        <div className="mt-8 flex justify-center">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                sx={{
                                    color: "white",
                                    bg: "green.600",
                                    "&:hover": {
                                        bg: "green.700",
                                    },
                                    "&:focus": {
                                        bg: "green.700",
                                    },
                                    "&:disabled": {
                                        opacity: 0.5,
                                        cursor: "not-allowed",
                                    },
                                    width: "100%",
                                    padding: "8px"
                                }}
                                className="rounded-md bg-gradient-to-r from-green-600 to-green-700 text-base font-medium text-white shadow-sm hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {
                                    isLoading
                                        ? (
                                            <div className="flex items-center space-x-2">
                                                <ClipLoader size={20} color="#ffffff" />
                                                <span>প্রক্রিয়াজাত হচ্ছে...</span>
                                            </div>
                                        ) : (
                                            "জমা দিন"
                                        )
                                }
                            </Button>
                        </div>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
};

export default RegisterMadrasah;
