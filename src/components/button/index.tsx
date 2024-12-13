import { colors } from "@/styles/theme";
import type { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import {
	ActivityIndicator,
	Text,
	type TextProps,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import { s } from "./styles";

type ButtonProps = TouchableOpacityProps & {
	isLoading?: boolean;
};

function Button({ children, isLoading = false, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			style={s.container}
			activeOpacity={0.8}
			disabled={isLoading}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={colors.gray[100]} />
			) : (
				children
			)}
		</TouchableOpacity>
	);
}

function Title({ children }: TextProps) {
	return <Text style={s.title}>{children}</Text>;
}

type IconProps = {
	icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
	return <Icon size={24} color={colors.gray[100]} />;
}

Button.Icon = Icon;
Button.Title = Title;
export { Button };
