import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputSelectWrapperExtendedProps = {
    name: string;
    size?: "small" | "medium";
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
    items: any;
    handler: (field: string, value: string) => void;
};

const InputSelectWrapperExtended = ({
    items,
    name,
    label,
    size = "small",
    required = true,
    fullWidth = true,
    sx = {},
    disabled = false,
    handler
}: TInputSelectWrapperExtendedProps
) => {
    const { control, formState } = useFormContext();
    const isError = formState.errors[name] !== undefined;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <TextField
                    {...field}
                    sx={sx}
                    size={size}
                    disabled={disabled}
                    select
                    label={label}
                    required={required}
                    fullWidth={fullWidth}
                    error={isError}
                    onChange={(e) => {
                        handler && handler(name, e.target.value);
                    }}
                    helperText={
                        isError ? (formState.errors[name]?.message as string) : ""
                    }
                >
                    {
                        items?.map((name: any, idx: number) => (
                            <MenuItem key={idx} value={name}>
                                {name}
                            </MenuItem>
                        ))
                    }
                </TextField>
            )}
        />
    );
};

export default InputSelectWrapperExtended;
