import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TFileUploaderWrapperProps = {
    name: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
};

const FileUploaderWrapper = ({ name, label = "", sx = {}, required = true, fullWidth = true }: TFileUploaderWrapperProps) => {
    const { control } = useFormContext();
    const [fileName, setFileName] = React.useState("");

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, name, ...field } }) => {
                return (
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={sx}
                        className="bg-gradient-to-r from-green-600 to-green-700"
                    >
                        {
                            fileName ? (fileName.slice(0, 25)) : (label || "ছবি আপলোড করুন")
                        }
                        <Input
                            {...field}
                            required={required}
                            fullWidth={fullWidth}
                            onChange={(e) => {
                                setFileName((e?.target as HTMLInputElement)?.files?.[0]?.name as string);
                                return onChange((e?.target as HTMLInputElement)?.files?.[0]);
                            }}
                            value={value?.fileName}
                            type="file"
                            sx={{ display: "none" }}
                        />
                    </Button>
                )
            }}
        />
    );
};

export default FileUploaderWrapper;
