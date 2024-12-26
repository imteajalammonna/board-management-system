import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputWrapperProps = {
    name: string;
    required?: boolean;
    placeholder?: string;
    label: string;
    type?: "text" | "password" | "email" | "number" | "tel";
    fullWidth?: boolean;
    sx?: SxProps;
};

const InputWrapper = ({
    name,
    required = true,
    label,
    placeholder = "",
    type = "text",
    fullWidth = true,
    sx = {}
}: TInputWrapperProps
) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    label={label}
                    required={required}
                    placeholder={placeholder || label}
                    variant="outlined"
                    size="small"
                    type={type}
                    fullWidth={fullWidth}
                    error={!!error?.message}
                    helperText={error?.message}
                    sx={sx}
                />
            )}
        />
    );
};

export default InputWrapper;
