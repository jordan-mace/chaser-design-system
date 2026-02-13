import clsx from 'clsx';
import React, { createContext, useContext, useState } from 'react';
import {
  tabsContainer,
  tabsList,
  tabsListHorizontal,
  tabsListVertical,
  tabItem,
  tabContent,
} from './styles.css';
import Box from '../Box';
import {
  type TabsProps,
  type TabListProps,
  type TabProps,
  type TabPanelProps,
  type TabsContextType,
} from './Tabs.types';

const TabsContext = createContext<TabsContextType>({
  activeTab: '',
  setActiveTab: () => {},
});

const Tabs = ({
  children,
  defaultValue = '',
  orientation = 'horizontal',
  onChange,
  className,
  ...props
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <TabsContext.Provider
      value={{ activeTab, setActiveTab: handleTabChange, orientation }}
    >
      <Box className={clsx(tabsContainer, className)} width="100%" {...props}>
        {children}
      </Box>
    </TabsContext.Provider>
  );
};

const TabList = ({ children, className }: TabListProps) => {
  const { orientation } = useContext(TabsContext);

  return (
    <Box
      as="div"
      role="tablist"
      className={clsx(
        tabsList,
        orientation === 'vertical' ? tabsListVertical : tabsListHorizontal,
        className,
      )}
    >
      {children}
    </Box>
  );
};

const Tab = ({ value, children, disabled = false, className }: TabProps) => {
  const { activeTab, setActiveTab, orientation } = useContext(TabsContext);
  const isActive = activeTab === value;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value);
    }
  };

  return (
    <Box
      as="button"
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={handleClick}
      className={clsx(
        tabItem[
          orientation === 'vertical'
            ? isActive
              ? 'verticalActive'
              : 'base'
            : isActive
              ? 'active'
              : 'base'
        ],
        className,
      )}
    >
      {children}
    </Box>
  );
};

const TabPanel = ({ value, children, className }: TabPanelProps) => {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <Box as="div" role="tabpanel" className={clsx(tabContent, className)}>
      {children}
    </Box>
  );
};

const TabsComponent = Object.assign(Tabs, {
  List: TabList,
  Tab,
  Panel: TabPanel,
});

export default TabsComponent;
