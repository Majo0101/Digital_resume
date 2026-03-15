-- Ensure the connection and all string literals are treated as utf8mb4
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Create and use the database
CREATE DATABASE IF NOT EXISTS bmcode_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bmcode_db;

-- Education table
CREATE TABLE IF NOT EXISTS bm_edu (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    YearFrom    VARCHAR(20)  NOT NULL,
    YearTo      VARCHAR(20)  NOT NULL,
    faculty     VARCHAR(150) NOT NULL,
    field       VARCHAR(150) NOT NULL,
    school      VARCHAR(150) NOT NULL,
    description TEXT         NOT NULL,
    lang        CHAR(2)      NOT NULL DEFAULT 'EN'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Experience table
CREATE TABLE IF NOT EXISTS bm_exp (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    YearFrom    VARCHAR(20)  NOT NULL,
    YearTo      VARCHAR(20)  NOT NULL,
    place       VARCHAR(150) NOT NULL,
    `position`  VARCHAR(150) NOT NULL,
    employer    VARCHAR(150) NOT NULL,
    description TEXT         NOT NULL,
    lang        CHAR(2)      NOT NULL DEFAULT 'EN'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Gallery table
CREATE TABLE IF NOT EXISTS bm_gall (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    `date`      VARCHAR(20)  NOT NULL,
    title       VARCHAR(200) NOT NULL,
    infoText    TEXT         NOT NULL,
    provider    VARCHAR(100) NOT NULL,
    verifyUrl   VARCHAR(500) NOT NULL DEFAULT '',
    prefix      VARCHAR(100) NOT NULL DEFAULT '/',
    image       VARCHAR(200) NOT NULL,
    thumbnail   VARCHAR(200) NOT NULL,
    lang        CHAR(2)      NOT NULL DEFAULT 'EN'
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- ─── Education seed data ─────────────────────────────────────────────────────

INSERT INTO bm_edu (YearFrom, YearTo, faculty, field, school, description, lang) VALUES

-- EN
('2006', '2010', 'Technical Secondary School', 'Electrical Engineering',
 'Technical Secondary School, Rimavská Sobota – Tisovec',
 'Technical secondary education focused on electrical engineering fundamentals, logical thinking, and practical problem solving both independently and in teams.',
 'EN'),

('2021', '2025', 'Faculty of Informatics', 'Applied Informatics for Industry 4.0 (BSc.)',
 'Paneuropean University, Bratislava',
 'Studies focused on data mining methods and their application in large-scale data warehouse environments (Big Data), including an introduction to business intelligence and analytical systems.',
 'EN'),

('2025', 'Present', 'Faculty of Informatics', 'Applied Informatics for Industry 4.0 (MSc.)',
 'Paneuropean University, Bratislava',
 'Master studies focused on enterprise information systems, distributed systems, advanced intelligent systems, and information system security within modern IT environments.',
 'EN'),

-- SK
('2006', '2010', 'Stredná odborná škola', 'Elektrotechnika',
 'Stredná odborná škola, Rimavská Sobota – Tisovec',
 'Technické stredoškolské vzdelanie zamerané na základy elektrotechniky, logické myslenie a praktické riešenie technických problémov samostatne aj v tíme.',
 'SK'),

('2021', '2025', 'Fakulta informatiky', 'Aplikovaná informatika pre priemysel 4.0 (Bc.)',
 'Paneurópska vysoká škola, Bratislava',
 'Štúdium zamerané na metódy dolovania dát (data mining) a ich využitie v prostredí rozsiahlych dátových skladov (Big Data), vrátane úvodu do nástrojov business intelligence a analytických systémov.',
 'SK'),

('2025', 'Aktuálne', 'Fakulta informatiky', 'Aplikovaná informatika pre priemysel 4.0 (Mgr.)',
 'Paneurópska vysoká škola, Bratislava',
 'Magisterské štúdium zamerané na podnikové informačné systémy, distribuované systémy, pokročilé inteligentné systémy a bezpečnosť informačných systémov v moderných IT prostrediach.',
 'SK'),

-- DE
('2006', '2010', 'Technische Sekundarschule', 'Elektrotechnik',
 'Technische Sekundarschule, Rimavská Sobota – Tisovec',
 'Technische Ausbildung mit Schwerpunkt auf elektrotechnischen Grundlagen, logischem Denken und praktischer Problemlösung sowohl selbstständig als auch im Team.',
 'DE'),

('2021', '2025', 'Fakultät für Informatik', 'Angewandte Informatik für Industrie 4.0 (BSc.)',
 'Paneuropäische Hochschule, Bratislava',
 'Studium mit Fokus auf Data-Mining-Methoden und deren Anwendung in großen Data-Warehouse-Umgebungen (Big Data) sowie Einführung in Business-Intelligence- und Analysesysteme.',
 'DE'),

('2025', 'Gegenwärtig', 'Fakultät für Informatik', 'Angewandte Informatik für Industrie 4.0 (MSc.)',
 'Paneuropäische Hochschule, Bratislava',
 'Masterstudium mit Schwerpunkt auf Unternehmensinformationssystemen, verteilten Systemen, intelligenten Systemen und Informationssicherheit in modernen IT-Umgebungen.',
 'DE');

-- ─── Experience seed data ────────────────────────────────────────────────────

INSERT INTO bm_exp (YearFrom, YearTo, place, `position`, employer, description, lang) VALUES
-- EN
('2016', '2021', 'Revúca, Slovakia', 'Service Technician',
 'Freelance (Self-employed)',
 'Biogas plant service (Agrikomp technology). Construction of technological switchboards, custom control, replacement of power components (Up to 1000V) and fault diagnostics (measurements, etc.). Knowledge of PLC Beckhoff, Siemens, Wago. Repairs of various technologies like elevators, cranes, cogeneration units, boilers, etc. Transhipment of HV / LV lines and kiosks. Revisions and inspections. Reading drawings and diagrams. Management of employees. Complete automation solutions.',
 'EN'),
('2022', '2023', 'Bratislava, Slovakia', 'SMART Measurement Technician',
 'Západoslovenská distribučná, a.s. - ZSE Group',
 'Management and editing of data in the SAP system, ISU/DM, and EDM. Creation and specification of reports for statistics. Management of team IT systems. Preparation and updating of work procedures. Collaboration in the working group for IT business projects. Automation of processes with Microsoft Power Automate. Development of business applications in Microsoft Power Apps. Data processing and visualization using Python, SQL, and PowerBi.',
 'EN'),
('2023', '2024', 'Bratislava, Slovakia', 'SMART Measurement Specialist',
 'Západoslovenská distribučná, a.s. - ZSE Group',
 'Development of work procedures and methodologies. Managing, updating, and correcting data in systems. Developing and managing automation and robotic tools (MS Power Automate / Blue Prism). Creating complex data sets, statistics, reports, and conducting data analysis for business purposes (Python, PowerBi, SQL, PySpark, Jupyter). Coordinating activities as a team leader and actively participating in projects. Performing the role of a key user in the assigned IT systems.',
 'EN'),
('2025', '2026', 'Bratislava, Slovakia', 'Data Analyst',
 'Západoslovenská distribučná, a.s. - ZSE Group',
 'Data acquisition, processing, and analysis. Development of analytical scripts in SQL and Python to identify trends, patterns, and business insights, including predictive models. Creation and maintenance of analytical datasets, reports, dashboards, and visualizations (Power BI). Data preparation and transformation for internal projects and applications. Ensuring data availability within Data Lake and Data Warehouse environments (Microsoft Fabric).',
 'EN'),
('2026', 'Present', 'Bratislava, Slovakia', 'Data Scientist',
 'Západoslovenská distribučná, a.s. - ZSE Group',
 'Design and maintenance of end-to-end analytics pipelines using Apache Spark and Delta Lake. Processing and transformation of large datasets in Data Lake and Lakehouse environments. Building analytical datasets and feature layers for reporting, advanced analytics, and machine learning. Integration of cross-domain data sources including GIS, metering, and customer data. Application of data quality checks, exploratory data analysis, and validation to support analytical and predictive use cases.',
 'EN'),
-- SK
('2016', '2021', 'Revúca, Slovensko', 'Servisný technik',
 'Freelance (Samostatne zárobkovo činný)',
 'Servis bioplynových staníc (technológia Agrikomp). Stavba technologických rozvádzačov, zákazkové riadenie, výmena výkonových komponentov (1000V) a diagnostika porúch (merania, atď.). Znalosť PLC Beckhoff, Siemens, Wago. Opravy rôznych technológií ako výťahy, žeriavy, kogeneračné jednotky, kotly atď. Prekladanie VN / NN vedení a kioskov. Revízie a inšpekcie. Čítanie výkresov a schém. Riadenie zamestnancov. Kompletné automatizačné riešenia.',
 'SK'),
('2022', '2023', 'Bratislava, Slovensko', 'Technik SMART merania',
 'Západoslovenská distribučná, a.s. - Skupina ZSE',
 'Správa a úprava údajov v systéme SAP, ISU/DM a EDM. Vytváranie a špecifikácia správ pre štatistiky. Správa IT systémov tímu. Príprava a aktualizácia pracovných postupov. Spolupráca v pracovnej skupine pre IT obchodné projekty. Automatizácia procesov s nástrojmi Microsoft Power Automate. Vývoj biznis aplikácií v Microsoft Power Apps. Spracovanie a vizualizácia údajov s využitím Python, SQL a PowerBi.',
 'SK'),
('2023', '2024', 'Bratislava, Slovensko', 'Špecialista SMART merania',
 'Západoslovenská distribučná, a.s. - Skupina ZSE',
 'Vývoj pracovných postupov a metodológií. Správa, aktualizácia a korekcia údajov v systémoch. Vývoj a správa automatizačných a robotických nástrojov (MS Power Automate / Blue Prism). Vytváranie komplexných sád údajov, štatistík, správ a analýza údajov na obchodné účely (Python, PowerBi, SQL, PySpark, Jupyter). Koordinácia činností ako vedúci tímu a aktívna účasť na projektoch. Plnenie úlohy kľúčového používateľa v pridelených IT systémoch.',
 'SK'),
('2025', '2026', 'Bratislava, Slovensko', 'Dátový analytik',
 'Západoslovenská distribučná, a.s. - Skupina ZSE',
 'Získavanie, spracovanie a analýza dát. Vývoj analytických skriptov v SQL a Python na identifikáciu trendov, vzorov a obchodných príležitostí vrátane prediktívnych modelov. Tvorba a správa analytických datasetov, reportov, dashboardov a vizualizácií (Power BI). Príprava a transformácia dát pre interné projekty a aplikácie. Zabezpečenie dostupnosti dát v prostredí Data Lake a Data Warehouse (Microsoft Fabric).',
 'SK'),
('2026', 'Aktuálne', 'Bratislava, Slovensko', 'Dátový vedec',
 'Západoslovenská distribučná, a.s. - Skupina ZSE',
 'Návrh a správa end-to-end analytických pipeline s využitím Apache Spark a Delta Lake. Spracovanie a transformácia veľkých dátových objemov v prostredí Data Lake a Lakehouse. Tvorba analytických datasetov a feature vrstiev pre reporting, pokročilú analytiku a strojové učenie. Integrácia dát z rôznych domén vrátane GIS, merania a zákazníckych dát. Aplikácia kontrol kvality dát, exploratívnej analýzy a validácie na podporu analytických a prediktívnych úloh.',
 'SK'),
-- DE
('2016', '2021', 'Revúca, Slowakei', 'Servicetechniker',
 'Freelance (Selbständig)',
 'Service von Biogasanlagen (Agrikomp-Technologie). Bau von Technologieschalttafeln, kundenspezifische Steuerung, Austausch von Leistungskomponenten (1000V) und Fehlerdiagnose (Messungen usw.). Kenntnisse von PLC Beckhoff, Siemens, Wago. Reparaturen verschiedener Technologien wie Aufzüge, Kräne, Blockheizkraftwerke, Kessel usw. Umverlegung von HV / LV-Leitungen und Kiosken. Überprüfungen und Inspektionen. Zeichnungen und Diagramme natürlich lesen. Mitarbeiterführung. Komplettlösungen für die Automatisierung.',
 'DE'),
('2022', '2023', 'Bratislava, Slowakei', 'SMART-Messtechniker',
 'Západoslovenská distribučná, a.s. - ZSE-Gruppe',
 'Verwaltung und Bearbeitung von Daten im SAP-System, ISU/DM und EDM. Erstellung und Spezifikation von Berichten für Statistiken. Verwaltung der IT-Systeme des Teams. Vorbereitung und Aktualisierung von Arbeitsverfahren. Zusammenarbeit in der Arbeitsgruppe für IT-Geschäftsprojekte. Automatisierung von Prozessen mit Microsoft/Blue Prism RPA-Tools. Entwicklung von Geschäftsanwendungen in Microsoft Power Apps. Datenverarbeitung und -visualisierung mit Python, SQL und PowerBi.',
 'DE'),
('2023', '2024', 'Bratislava, Slowakei', 'SMART-Messspezialist',
 'Západoslovenská distribučná, a.s. - ZSE-Gruppe',
 'Entwicklung von Arbeitsverfahren und Methoden. Verwaltung, Aktualisierung und Korrektur von Daten in Systemen. Entwicklung und Verwaltung von Automatisierungs- und Robotikwerkzeugen (MS Power Automate / Blue Prism). Erstellung komplexer Datensätze, Statistiken, Berichte und Durchführung von Datenanalysen für geschäftliche Zwecke (Python, PowerBi, SQL, PySpark, Jupyter). Koordination der Aktivitäten als Teamleiter und aktive Teilnahme an Projekten. Ausführung der Rolle eines Schlüsselbenutzers in den zugewiesenen IT-Systemen.',
 'DE'),
('2025', '2026', 'Bratislava, Slowakei', 'Datenanalyst',
 'Západoslovenská distribučná, a.s. - ZSE-Gruppe',
 'Datenerfassung, -verarbeitung und -analyse. Entwicklung analytischer Skripte in SQL und Python zur Identifikation von Trends, Mustern und geschäftlichen Erkenntnissen, einschließlich prädiktiver Modelle. Erstellung und Pflege analytischer Datensätze, Berichte, Dashboards und Visualisierungen (Power BI). Datenaufbereitung und -transformation für interne Projekte und Anwendungen. Sicherstellung der Datenverfügbarkeit in Data-Lake- und Data-Warehouse-Umgebungen (Microsoft Fabric).',
 'DE'),
('2026', 'Gegenwärtig', 'Bratislava, Slowakei', 'Data Scientist',
 'Západoslovenská distribučná, a.s. - ZSE-Gruppe',
 'Entwicklung und Wartung von End-to-End-Analysepipelines mit Apache Spark und Delta Lake. Verarbeitung und Transformation großer Datensätze in Data-Lake- und Lakehouse-Umgebungen. Aufbau analytischer Datensätze und Feature-Layer für Reporting, Advanced Analytics und Machine Learning. Integration domänenübergreifender Datenquellen wie GIS-, Mess- und Kundendaten. Anwendung von Datenqualitätsprüfungen, explorativer Datenanalyse und Validierung zur Unterstützung analytischer und prädiktiver Anwendungsfälle.',
 'DE');;

-- ─── Gallery seed data ───────────────────────────────────────────────────────

INSERT INTO bm_gall (id, `date`, title, infoText, provider, verifyUrl, prefix, image, thumbnail, lang) VALUES
(1, '07/28/2026', 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
'Validation of skills in implementing and managing analytics solutions using Microsoft Fabric. Focus on data ingestion and transformation, building analytics pipelines, and monitoring and optimizing data workloads in modern lakehouse environments.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/481716C9B938F624?sharingId=22293332490A649C', '/', 'Cert/dp700.jpg', 'Cert/dp700_small.jpg', 'EN'),
(2, '02/03/2025', 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
'Certification validating skills in building and maintaining data analytics solutions in Microsoft Fabric. Focus on data preparation, transformation, and the implementation and management of semantic models for analytical reporting and business intelligence.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/25C3B14E97ACC957?sharingId=22293332490A649C', '/', 'Cert/dp600.jpg', 'Cert/dp600_small.jpg', 'EN'),
(3, '03/10/2024', 'Azure Databricks & Spark for Data Engineers',
'Covers building data engineering projects using Azure Databricks and Apache Spark, including notebooks, clusters, and lakehouse architectures. Work with PySpark, Spark SQL, and data pipelines in Azure Data Lake environments.',
'Udemy', 'https://www.udemy.com/certificate/UC-99fbeff4-f5fe-41cb-8ae8-0b105ea39309/', '/', 'Cert/udemy_6.jpg', 'Cert/udemy_6_small.jpg', 'EN'),
(4, '11/15/2024', 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
'Introduction to core data concepts in Microsoft Azure, including relational and non-relational data models, data processing approaches, and analytics workloads in modern cloud data platforms.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/27926BFC8DE6506?sharingId=22293332490A649C', '/', 'Cert/dp900.jpg', 'Cert/dp900_small.jpg', 'EN'),
(5, '03/27/2023', 'Python for Data Science and Machine Learning Bootcamp',
'Focus on practical data science workflows using Python, including NumPy, Pandas, visualization libraries, and machine learning with scikit-learn. Introduction to Spark for big data processing.',
'Udemy', 'https://www.udemy.com/certificate/UC-2bbe3531-d9bc-4274-b52a-c5ae1310e497/', '/', 'Cert/udemy_2.jpg', 'Cert/udemy_2_small.jpg', 'EN'),
(6, '04/11/2023', 'Data Analysis with Pandas and Python',
'Practical data analysis using Python and the Pandas library. Covers grouping, pivoting, joins, and manipulation of structured datasets for analytical tasks.',
'Udemy', 'https://www.udemy.com/certificate/UC-f578a39e-385c-4054-a32d-959fb4030bbb/', '/', 'Cert/udemy_7.jpg', 'Cert/udemy_7_small.jpg', 'EN'),
(7, '03/10/2023', 'The Ultimate MySQL Bootcamp',
'Covers SQL fundamentals including joins, aggregations, window functions, and database design concepts for working with relational datasets.',
'Udemy', 'https://www.udemy.com/certificate/UC-65bd5a60-6463-41f2-95e2-66feb4059340/', '/', 'Cert/udemy_5.jpg', 'Cert/udemy_5_small.jpg', 'EN'),
(8, '04/30/2023', 'Microsoft Power BI: Smart Data Visualization',
'Focuses on creating interactive visualizations from data sourced from Excel, databases, and PDF files. Covers data preparation, DAX usage, and publishing dashboards online.',
'Seduo', '', '/', 'Cert/seduo_2.jpg', 'Cert/seduo_2_small.jpg', 'EN'),
(9, '07/03/2025', 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
'Foundational understanding of artificial intelligence workloads in Microsoft Azure, including machine learning, computer vision, natural language processing, and generative AI capabilities within modern cloud platforms.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/12479247AAE2DC29?sharingId=22293332490A649C', '/', 'Cert/ai900.jpg', 'Cert/ai900_small.jpg', 'EN'),
(10, '28.07.2026', 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
'Validation of skills in implementing and managing analytics solutions using Microsoft Fabric. Focus on data ingestion and transformation, building analytics pipelines, and monitoring and optimizing data workloads in modern lakehouse environments.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/481716C9B938F624?sharingId=22293332490A649C', '/', 'Cert/dp700.jpg', 'Cert/dp700_small.jpg', 'SK'),
(11, '03.02.2025', 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
'Certification validating skills in building and maintaining data analytics solutions in Microsoft Fabric. Focus on data preparation, transformation, and the implementation and management of semantic models for analytical reporting and business intelligence.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/25C3B14E97ACC957?sharingId=22293332490A649C', '/', 'Cert/dp600.jpg', 'Cert/dp600_small.jpg', 'SK'),
(12, '10.03.2024', 'Azure Databricks & Spark for Data Engineers',
'Covers building data engineering projects using Azure Databricks and Apache Spark, including notebooks, clusters, and lakehouse architectures. Work with PySpark, Spark SQL, and data pipelines in Azure Data Lake environments.',
'Udemy', 'https://www.udemy.com/certificate/UC-99fbeff4-f5fe-41cb-8ae8-0b105ea39309/', '/', 'Cert/udemy_6.jpg', 'Cert/udemy_6_small.jpg', 'SK'),
(13, '15.11.2024', 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
'Introduction to core data concepts in Microsoft Azure, including relational and non-relational data models, data processing approaches, and analytics workloads in modern cloud data platforms.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/27926BFC8DE6506?sharingId=22293332490A649C', '/', 'Cert/dp900.jpg', 'Cert/dp900_small.jpg', 'SK'),
(14, '27.03.2023', 'Python for Data Science and Machine Learning Bootcamp',
'Focus on practical data science workflows using Python, including NumPy, Pandas, visualization libraries, and machine learning with scikit-learn. Introduction to Spark for big data processing.',
'Udemy', 'https://www.udemy.com/certificate/UC-2bbe3531-d9bc-4274-b52a-c5ae1310e497/', '/', 'Cert/udemy_2.jpg', 'Cert/udemy_2_small.jpg', 'SK'),
(15, '11.04.2023', 'Data Analysis with Pandas and Python',
'Practical data analysis using Python and the Pandas library. Covers grouping, pivoting, joins, and manipulation of structured datasets for analytical tasks.',
'Udemy', 'https://www.udemy.com/certificate/UC-f578a39e-385c-4054-a32d-959fb4030bbb/', '/', 'Cert/udemy_7.jpg', 'Cert/udemy_7_small.jpg', 'SK'),
(16, '10.03.2023', 'The Ultimate MySQL Bootcamp',
'Covers SQL fundamentals including joins, aggregations, window functions, and database design concepts for working with relational datasets.',
'Udemy', 'https://www.udemy.com/certificate/UC-65bd5a60-6463-41f2-95e2-66feb4059340/', '/', 'Cert/udemy_5.jpg', 'Cert/udemy_5_small.jpg', 'SK'),
(17, '30.04.2023', 'Microsoft Power BI: Smart Data Visualization',
'Focuses on creating interactive visualizations from data sourced from Excel, databases, and PDF files. Covers data preparation, DAX usage, and publishing dashboards online.',
'Seduo', '', '/', 'Cert/seduo_2.jpg', 'Cert/seduo_2_small.jpg', 'SK'),
(18, '03.07.2025', 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
'Foundational understanding of artificial intelligence workloads in Microsoft Azure, including machine learning, computer vision, natural language processing, and generative AI capabilities within modern cloud platforms.',
'Microsoft', 'https://learn.microsoft.com/api/credentials/share/en-gb/MarianBodnar-2041/12479247AAE2DC29?sharingId=22293332490A649C', '/', 'Cert/ai900.jpg', 'Cert/ai900_small.jpg', 'SK');
