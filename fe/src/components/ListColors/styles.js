import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    cursor: pointer;
  }

 .sidebar_list {
  display: none;
  gap: 1rem;
  align-items: center;
  transition: 300ms;
}

.sidebar_list_active {
  display: flex;
}

.sidebar_list_item {
  border-radius: 50%;
  height: 2.4rem;
  width: 2.4rem;
  list-style: none;

  cursor: pointer;
}

`