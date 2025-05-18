import { Route, Routes } from "react-router"
import BaseLayout from "../components/base.layout"
import AdultIntro from "./adult-intro"
import Home from "./home"
import Intro from "./intro"
import KidIntro from "./kid-intro"
import Result from "./result"
import TestType from "./test-[type]"

export default function Pages() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/kid-intro" element={<KidIntro />} />
        <Route path="/test/:type" element={<TestType />} />
        <Route path="/adult-intro" element={<AdultIntro />} />
        <Route path="/result" element={<Result />} />
      </Route>
    </Routes>
  )
}
