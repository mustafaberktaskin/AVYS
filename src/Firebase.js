import firebase from "firebase/compat/app";
import "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAezpUIT1yMO-UZqsfmA5QVQ00GCPzLaRo",
  authDomain: "avys-e254a.firebaseapp.com",
  projectId: "avys-e254a",
  storageBucket: "avys-e254a.appspot.com",
  messagingSenderId: "285292948160",
  appId: "1:285292948160:web:53907fc008010ecd775b25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const register = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const userDoc = doc(db, "users", user.uid);
  await setDoc(userDoc, {
    email: user.email,
    uid: user.uid,
  });
  return user;
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};
const addAcademicRecord = async (
  title,
  content,
  gorev,
  startDate,
  endDate
) => {
  const docRef = await addDoc(collection(db, "academicRecords"), {
    title: title,
    content: content,
    gorev: gorev,
    startDate: startDate,
    endDate: endDate,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getAcademicRecord = async () => {
  const academicRecords = collection(db, "academicRecords");
  const snapshot = await getDocs(academicRecords);
  const recordsArray = [];
  snapshot.forEach((doc) => {
    recordsArray.push({ ...doc.data(), id: doc.id });
  });
  return recordsArray;
};

const deleteAcademicRecord = async (title) => {
  const q = query(
    collection(db, "academicRecords"),
    where("title", "==", title)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addEducationRecord = async (
  educationTitle,
  educationContent,
  educationStartDate,
  educationEndDate
) => {
  const docRef = await addDoc(collection(db, "educationRecords"), {
    educationTitle: educationTitle,
    educationContent: educationContent,
    educationStartDate: educationStartDate,
    educationEndDate: educationEndDate,
  });

  console.log("Document written with ID: ", docRef.id);
};

const getEducationRecord = async () => {
  const educationRecords = collection(db, "educationRecords");
  const snapshot = await getDocs(educationRecords);
  const recordsArray = [];
  snapshot.forEach((doc) => {
    recordsArray.push({ ...doc.data(), id: doc.id });
  });
  return recordsArray;
};

const deleteEducationRecord = async (educationTitle) => {
  const q = query(
    collection(db, "educationRecords"),
    where("educationTitle", "==", educationTitle)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addBooks = async (
  title,
  kitap_bolum,
  yazar,
  yayın_yeri,
  editor,
  basim_sayisi,
  ISBN,
  basim_tarihi,
  kitap_turu
) => {
  const docRef = await addDoc(collection(db, "books"), {
    title: title,
    kitap_bolum: kitap_bolum,
    yazar: yazar,
    yayın_yeri: yayın_yeri,
    editor: editor,
    basim_sayisi: basim_sayisi,
    ISBN: ISBN,
    basim_tarihi: basim_tarihi,
    kitap_turu: kitap_turu,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getBooks = async () => {
  const books = collection(db, "books");
  const snapshot = await getDocs(books);
  const booksArray = [];
  snapshot.forEach((doc) => {
    booksArray.push({ ...doc.data(), id: doc.id });
  });
  return booksArray;
};

const deleteBooks = async (title) => {
  const q = query(collection(db, "books"), where("title", "==", title));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addArticles = async (
  makale_adi,
  makale_sahibi,
  makale_yayin_yeri,
  makale_yayin_tarihi,
  makale_link
) => {
  const docRef = await addDoc(collection(db, "articles"), {
    makale_adi: makale_adi,
    makale_sahibi: makale_sahibi,
    makale_yayin_yeri: makale_yayin_yeri,
    makale_yayin_tarihi: makale_yayin_tarihi,
    makale_link: makale_link,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getArticles = async () => {
  const articles = collection(db, "articles");
  const snapshot = await getDocs(articles);
  const articlesArray = [];
  snapshot.forEach((doc) => {
    articlesArray.push({ ...doc.data(), id: doc.id });
  });
  return articlesArray;
};

const deleteArticles = async (makale_adi) => {
  const q = query(
    collection(db, "articles"),
    where("makale_adi", "==", makale_adi)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addDeclaration = async (
  bildiri_adi,
  bildiri_sahibi,
  bildiri_yayin_yeri,
  bildiri_yayin_tarihi
) => {
  const docRef = await addDoc(collection(db, "declarations"), {
    bildiri_adi: bildiri_adi,
    bildiri_sahibi: bildiri_sahibi,
    bildiri_yayin_yeri: bildiri_yayin_yeri,
    bildiri_yayin_tarihi: bildiri_yayin_tarihi,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getDeclarations = async () => {
  const declarations = collection(db, "declarations");
  const snapshot = await getDocs(declarations);
  const declarationsArray = [];
  snapshot.forEach((doc) => {
    declarationsArray.push({ ...doc.data(), id: doc.id });
  });
  return declarationsArray;
};

const deleteDeclarations = async (bildiri_adi) => {
  const q = query(
    collection(db, "declarations"),
    where("bildiri_adi", "==", bildiri_adi)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addProjects = async (
  title,
  proje_sahibi,
  proje_yayin_yeri,
  proje_baslangic,
  proje_bitis,
  maliyet,
  tamamlanma_durumu,
  proje_turu
) => {
  const docRef = await addDoc(collection(db, "projects"), {
    title: title,
    proje_sahibi: proje_sahibi,
    proje_yayin_yeri: proje_yayin_yeri,
    proje_baslangic: proje_baslangic,
    proje_bitis: proje_bitis,
    maliyet: maliyet,
    tamamlanma_durumu: tamamlanma_durumu,
    proje_turu: proje_turu,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getProjects = async () => {
  const projects = collection(db, "projects");
  const snapshot = await getDocs(projects);
  const projectsArray = [];
  snapshot.forEach((doc) => {
    projectsArray.push({ ...doc.data(), id: doc.id });
  });
  return projectsArray;
};

const deleteProjects = async (title) => {
  const q = query(collection(db, "projects"), where("title", "==", title));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addThesis = async (yil, ad_soyad, tez_adi, universite) => {
  const docRef = await addDoc(collection(db, "thesis"), {
    yil: yil,
    ad_soyad: ad_soyad,
    tez_adi: tez_adi,
    universite: universite,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getThesis = async () => {
  const thesis = collection(db, "thesis");
  const snapshot = await getDocs(thesis);
  const thesisArray = [];
  snapshot.forEach((doc) => {
    thesisArray.push({ ...doc.data(), id: doc.id });
  });
  return thesisArray;
};

const deleteThesis = async (tez_adi) => {
  const q = query(collection(db, "thesis"), where("tez_adi", "==", tez_adi));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addLessons = async (donem, ders_adi, dili, saat) => {
  const docRef = await addDoc(collection(db, "lessons"), {
    donem: donem,
    ders_adi: ders_adi,
    dili: dili,
    saat: saat,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getLessons = async () => {
  const lessons = collection(db, "lessons");
  const snapshot = await getDocs(lessons);
  const lessonsArray = [];
  snapshot.forEach((doc) => {
    lessonsArray.push({ ...doc.data(), id: doc.id });
  });
  return lessonsArray;
};

const deleteLessons = async (ders_adi) => {
  const q = query(collection(db, "lessons"), where("ders_adi", "==", ders_adi));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addMasterLessons = async (donem3, ders_adi3, dili3, saat3) => {
  const docRef = await addDoc(collection(db, "mastersLessons"), {
    donem3: donem3,
    ders_adi3: ders_adi3,
    dili3: dili3,
    saat3: saat3,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getMasterLessons = async () => {
  const masterLessons = collection(db, "mastersLessons");
  const snapshot = await getDocs(masterLessons);
  const masterLessonsArray = [];
  snapshot.forEach((doc) => {
    masterLessonsArray.push({ ...doc.data(), id: doc.id });
  });
  return masterLessonsArray;
};

const deleteMasterLessons = async (ders_adi3) => {
  const q = query(
    collection(db, "mastersLessons"),
    where("ders_adi3", "==", ders_adi3)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addPhdLessons = async (donem4, ders_adi4, dili4, saat4) => {
  const docRef = await addDoc(collection(db, "phDLessons"), {
    donem4: donem4,
    ders_adi4: ders_adi4,
    dili4: dili4,
    saat4: saat4,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getPhdLessons = async () => {
  const phdLessons = collection(db, "phDLessons");
  const snapshot = await getDocs(phdLessons);
  const phdLessonsArray = [];
  snapshot.forEach((doc) => {
    phdLessonsArray.push({ ...doc.data(), id: doc.id });
  });
  return phdLessonsArray;
};

const deletePhdLessons = async (ders_adi4) => {
  const q = query(
    collection(db, "phDLessons"),
    where("ders_adi4", "==", ders_adi4)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const associateLessons = async (donem2, ders_adi2, dili2, saat2) => {
  const docRef = await addDoc(collection(db, "associateLessons"), {
    donem2: donem2,
    ders_adi2: ders_adi2,
    dili2: dili2,
    saat2: saat2,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getAssociateLessons = async () => {
  const associateLessons = collection(db, "associateLessons");
  const snapshot = await getDocs(associateLessons);
  const associateLessonsArray = [];
  snapshot.forEach((doc) => {
    associateLessonsArray.push({ ...doc.data(), id: doc.id });
  });
  return associateLessonsArray;
};

const deleteAssociateLessons = async (ders_adi2) => {
  const q = query(
    collection(db, "associateLessons"),
    where("ders_adi2", "==", ders_adi2)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addRewards = async (odul, tur, ulke, universite, yil) => {
  const docRef = await addDoc(collection(db, "rewards"), {
    odul: odul,
    tur: tur,
    ulke: ulke,
    universite: universite,
    yil: yil,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getRewards = async () => {
  const rewards = collection(db, "rewards");
  const snapshot = await getDocs(rewards);
  const rewardsArray = [];
  snapshot.forEach((doc) => {
    rewardsArray.push({ ...doc.data(), id: doc.id });
  });
  return rewardsArray;
};

const deleteRewards = async (odul) => {
  const q = query(collection(db, "rewards"), where("odul", "==", odul));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addPatents = async (title, patent_sahibi, patent_turu, patent_yili, section) => { 
  const docRef = await addDoc(collection(db, "patents"), {
    title: title,
    patent_sahibi: patent_sahibi,
    patent_turu: patent_turu,
    patent_yili: patent_yili,
    section: section,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getPatents = async () => {
  const patents = collection(db, "patents");
  const snapshot = await getDocs(patents);
  const patentsArray = [];
  snapshot.forEach((doc) => {
    patentsArray.push({ ...doc.data(), id: doc.id });
  });
  return patentsArray;
};

const deletePatents = async (title) => {
  const q = query(collection(db, "patents"), where("title", "==", title));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addMemberships = async (kurum_adi, uye_turu, uyelik_tarihi) => {
  const docRef = await addDoc(collection(db, "memberships"), {
    kurum_adi: kurum_adi,
    uye_turu: uye_turu,
    uyelik_tarihi: uyelik_tarihi,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getMemberships = async () => {
  const memberships = collection(db, "memberships");
  const snapshot = await getDocs(memberships);
  const membershipsArray = [];
  snapshot.forEach((doc) => {
    membershipsArray.push({ ...doc.data(), id: doc.id });
  });
  return membershipsArray;
};

const deleteMemberships = async (kurum_adi) => {
  const q = query(
    collection(db, "memberships"),
    where("kurum_adi", "==", kurum_adi)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addActivitys = async (etkinlik_adi, etkinlik_turu, etkinlik_tarihi, etkinlik_yeri, katilim_turu) => {
  const docRef = await addDoc(collection(db, "activitys"), {
    etkinlik_adi: etkinlik_adi,
    etkinlik_turu: etkinlik_turu,
    etkinlik_tarihi: etkinlik_tarihi,
    etkinlik_yeri: etkinlik_yeri,
    katilim_turu: katilim_turu,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getActivitys = async () => {
  const activitys = collection(db, "activitys");
  const snapshot = await getDocs(activitys);
  const activitysArray = [];
  snapshot.forEach((doc) => {
    activitysArray.push({ ...doc.data(), id: doc.id });
  });
  return activitysArray;
};

const deleteActivitys = async (etkinlik_adi) => {
  const q = query(
    collection(db, "activitys"),
    where("etkinlik_adi", "==", etkinlik_adi)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addAdministration = async (title, content, gorev, baslangic, bitis) => {
  const docRef = await addDoc(collection(db, "administration"), {
    title: title,
    content: content,
    gorev: gorev,
    baslangic: baslangic,
    bitis: bitis,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getAdministration = async () => {
  const administration = collection(db, "administration");
  const snapshot = await getDocs(administration);
  const administrationArray = [];
  snapshot.forEach((doc) => {
    administrationArray.push({ ...doc.data(), id: doc.id });
  });
  return administrationArray;
};

const deleteAdministration = async () => {
  const q = query(collection(db, "administration"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};

const addExperiences = async (kurum_adi, baslama_tarihi, unvan_en, unvan_tr, section) => {
  const docRef = await addDoc(collection(db, "experiences"), {
    kurum_adi: kurum_adi,
    baslama_tarihi: baslama_tarihi,
    unvan_en: unvan_en,
    unvan_tr: unvan_tr,
    section: section,
  });
  console.log("Document written with ID: ", docRef.id);
};

const getExperiences = async () => {
  const experiences = collection(db, "experiences");
  const snapshot = await getDocs(experiences);
  const experiencesArray = [];
  snapshot.forEach((doc) => {
    experiencesArray.push({ ...doc.data(), id: doc.id });
  });
  return experiencesArray;
};

const deleteExperiences = async (kurum_adi) => {
  const q = query(
    collection(db, "experiences"),
    where("kurum_adi", "==", kurum_adi)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
};


export {
  db,
  auth,
  firebase,
  app,
  addAcademicRecord,
  getAcademicRecord,
  addEducationRecord,
  getEducationRecord,
  deleteAcademicRecord,
  deleteEducationRecord,
  addBooks,
  getBooks,
  deleteBooks,
  addArticles,
  getArticles,
  deleteArticles,
  addDeclaration,
  getDeclarations,
  deleteDeclarations,
  addProjects,
  getProjects,
  deleteProjects,
  addThesis,
  getThesis,
  deleteThesis,
  addLessons,
  getLessons,
  deleteLessons,
  addMasterLessons,
  getMasterLessons,
  deleteMasterLessons,
  addPhdLessons,
  getPhdLessons,
  deletePhdLessons,
  associateLessons,
  getAssociateLessons,
  deleteAssociateLessons,
  addRewards,
  getRewards,
  deleteRewards,
  addPatents,
  getPatents,
  deletePatents,
  addMemberships,
  getMemberships,
  deleteMemberships,
  addActivitys,
  getActivitys,
  deleteActivitys,
  addAdministration,
  getAdministration,
  deleteAdministration,
  addExperiences,
  getExperiences,
  deleteExperiences,
};
