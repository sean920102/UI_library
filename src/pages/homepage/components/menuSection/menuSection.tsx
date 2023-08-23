import { ScrollableComponent } from "../scrollable/scrollable";
interface IMenuSectionProps {
  children: any;
  icon: string;
  id: string;
  scrollable?: boolean;
  title: string;
}

export const MenuSection: React.FC<IMenuSectionProps> = (props: IMenuSectionProps) => {
  const getContent = (): JSX.Element => {
    if (props.scrollable) {
      return (
        <ScrollableComponent className="menu-section-content">
          {props.children}
        </ScrollableComponent>
      );
    }

    return <div className="menu-section-content">{props.children}</div>;
  };

  return (
    <div id={props.id} className="menu-section">
      <div className="menu-section-title">
        <i className={props.icon} />
        <span className="menu-section-title-text">{props.title}</span>
      </div>
      {getContent()}
    </div>
  );
};
