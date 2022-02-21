import { useEffect, useState } from "react";
import styled from "styled-components";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import useWidth from "../hooks/useWidth";
import { WorkData } from "../models/Work";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchWorkData } from "../store/work/actions";
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/Loader";

interface IStyledWorkBody {
  isScrollX: boolean;
}

const WorkBody = styled.div<IStyledWorkBody>`
  position: relative;
  width: 80%;
  min-width: 800px;
  min-height: 100px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 24px;
  overflow-x: ${(props) => (props.isScrollX ? "scroll" : "auto")};
  display: ${(props) => (props.isScrollX ? "block" : "flex")};
  flex-direction: column;
  align-items: flex-end;
`;

const Input = styled.input`
  margin-bottom: 32px;
  border: 2px solid gray;
  border-radius: 24px;
  padding: 4px 12px;
  font-size: 24px;
  font-family: "Ubuntu", sans-serif;

  &:focus {
    border: 2px solid green;
    outline: none;
    box-shadow: none;
  }
`;

const Table = styled.table`
  min-width: 1200px;
  width: 100%;
`;

const ColWide = styled.col`
  width: 20%;
`;

const ColNarrow = styled.col`
  width: 10%;
`;

const Work = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const width = useWidth();

  const worksData = useAppSelector((state) => state.work);

  const [visibleWorks, setVisibleWorks] = useState<WorkData[]>(worksData.works);

  useEffect(() => {
    dispatch(fetchWorkData());
  }, [dispatch]);

  useEffect(() => {
    setVisibleWorks(worksData.works);
  }, [worksData]);

  const handleVisibleWorks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const foundWorks: WorkData[] = worksData.works.filter((work) =>
      work.description.includes(event.target.value)
    );

    setVisibleWorks(foundWorks);
  };

  return (
    <WorkBody isScrollX={width < 1500}>
      <Input placeholder="search" onChange={handleVisibleWorks} />
      <Table>
        <colgroup>
          <ColNarrow />
          <ColWide />
          <ColWide />
          <ColWide />
          <ColNarrow />
          <ColNarrow />
        </colgroup>
        <thead>
          <TableHeader />
        </thead>
        {!worksData.isLoading && (
          <tbody>
            {visibleWorks?.map((work) => (
              <TableRow key={uuidv4()} workData={work} />
            ))}
          </tbody>
        )}
      </Table>
      {worksData.isLoading && <Loader />}
    </WorkBody>
  );
};

export default Work;
