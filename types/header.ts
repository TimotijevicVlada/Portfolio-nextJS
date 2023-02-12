interface ItemProps {
    name: string;
    icon: React.ReactNode;
    route: string;
}

export interface HeaderIconProps {
    item: ItemProps;
}

export interface ProfileImageProps {
    closeAction: () => void;
} 