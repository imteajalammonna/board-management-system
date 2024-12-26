import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTextAreaWrapperProps = {
    name: string;
    required?: boolean;
    placeholder?: string;
    label: string;
    rows?: number;
    fullWidth?: boolean;
    sx?: SxProps;
};

const TextAreaWrapper = ({
    name,
    required = true,
    label,
    placeholder = "",
    rows = 4,
    fullWidth = true,
    sx = {}
}: TTextAreaWrapperProps) => {
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
                    multiline
                    rows={rows}
                    fullWidth={fullWidth}
                    error={!!error?.message}
                    helperText={error?.message}
                    sx={sx}
                />
            )}
        />
    );
};

export default TextAreaWrapper;
