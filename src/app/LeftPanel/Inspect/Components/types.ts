export interface CollisionComponentProps {
    width: number;
    height: number;
    xPosition: number;
    yPosition: number;
    index: number;
}

export interface ActionCollisionProps extends CollisionComponentProps {
    actionId: string;
}