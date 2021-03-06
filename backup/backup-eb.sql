PGDMP         %                x            dev_db    12.2    12.2 6    L           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            M           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            N           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            O           1262    16393    dev_db    DATABASE     �   CREATE DATABASE dev_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE dev_db;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            P           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    25634    Alumno    TABLE       CREATE TABLE public."Alumno" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    correo character varying(255),
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Alumno";
       public         heap    postgres    false    3            �            1259    25632    Alumno_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Alumno_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Alumno_id_seq";
       public          postgres    false    206    3            Q           0    0    Alumno_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Alumno_id_seq" OWNED BY public."Alumno".id;
          public          postgres    false    205            �            1259    25648    Curso    TABLE     `  CREATE TABLE public."Curso" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion character varying(255),
    semestre character varying(255) NOT NULL,
    "profesorId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Curso";
       public         heap    postgres    false    3            �            1259    25688    CursoInscrito    TABLE     �   CREATE TABLE public."CursoInscrito" (
    id integer NOT NULL,
    "cursoId" integer NOT NULL,
    "alumnoId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public."CursoInscrito";
       public         heap    postgres    false    3            �            1259    25686    CursoInscrito_id_seq    SEQUENCE     �   CREATE SEQUENCE public."CursoInscrito_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."CursoInscrito_id_seq";
       public          postgres    false    212    3            R           0    0    CursoInscrito_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."CursoInscrito_id_seq" OWNED BY public."CursoInscrito".id;
          public          postgres    false    211            �            1259    25646    Curso_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Curso_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Curso_id_seq";
       public          postgres    false    3    208            S           0    0    Curso_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Curso_id_seq" OWNED BY public."Curso".id;
          public          postgres    false    207            �            1259    25620    Profesor    TABLE       CREATE TABLE public."Profesor" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    correo character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Profesor";
       public         heap    postgres    false    3            �            1259    25618    Profesor_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Profesor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Profesor_id_seq";
       public          postgres    false    204    3            T           0    0    Profesor_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Profesor_id_seq" OWNED BY public."Profesor".id;
          public          postgres    false    203            �            1259    25667    Prueba    TABLE     M  CREATE TABLE public."Prueba" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    nota double precision NOT NULL,
    "cursoId" integer NOT NULL,
    "alumnoId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public."Prueba";
       public         heap    postgres    false    3            �            1259    25665    Prueba_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Prueba_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Prueba_id_seq";
       public          postgres    false    210    3            U           0    0    Prueba_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Prueba_id_seq" OWNED BY public."Prueba".id;
          public          postgres    false    209            �            1259    16395    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    3            �
           2604    25706 	   Alumno id    DEFAULT     j   ALTER TABLE ONLY public."Alumno" ALTER COLUMN id SET DEFAULT nextval('public."Alumno_id_seq"'::regclass);
 :   ALTER TABLE public."Alumno" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205    206            �
           2604    25707    Curso id    DEFAULT     h   ALTER TABLE ONLY public."Curso" ALTER COLUMN id SET DEFAULT nextval('public."Curso_id_seq"'::regclass);
 9   ALTER TABLE public."Curso" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207    208            �
           2604    25708    CursoInscrito id    DEFAULT     x   ALTER TABLE ONLY public."CursoInscrito" ALTER COLUMN id SET DEFAULT nextval('public."CursoInscrito_id_seq"'::regclass);
 A   ALTER TABLE public."CursoInscrito" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            �
           2604    25709    Profesor id    DEFAULT     n   ALTER TABLE ONLY public."Profesor" ALTER COLUMN id SET DEFAULT nextval('public."Profesor_id_seq"'::regclass);
 <   ALTER TABLE public."Profesor" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            �
           2604    25710 	   Prueba id    DEFAULT     j   ALTER TABLE ONLY public."Prueba" ALTER COLUMN id SET DEFAULT nextval('public."Prueba_id_seq"'::regclass);
 :   ALTER TABLE public."Prueba" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            C          0    25634    Alumno 
   TABLE DATA           P   COPY public."Alumno" (id, nombre, correo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    206   >       E          0    25648    Curso 
   TABLE DATA           l   COPY public."Curso" (id, nombre, descripcion, semestre, "profesorId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    208   �>       I          0    25688    CursoInscrito 
   TABLE DATA           ^   COPY public."CursoInscrito" (id, "cursoId", "alumnoId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    212   �?       A          0    25620    Profesor 
   TABLE DATA           R   COPY public."Profesor" (id, nombre, correo, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    204   #@       G          0    25667    Prueba 
   TABLE DATA           e   COPY public."Prueba" (id, nombre, nota, "cursoId", "alumnoId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    210   �@       ?          0    16395    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    202   uA       V           0    0    Alumno_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Alumno_id_seq"', 3, true);
          public          postgres    false    205            W           0    0    CursoInscrito_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."CursoInscrito_id_seq"', 11, true);
          public          postgres    false    211            X           0    0    Curso_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Curso_id_seq"', 3, true);
          public          postgres    false    207            Y           0    0    Profesor_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Profesor_id_seq"', 3, true);
          public          postgres    false    203            Z           0    0    Prueba_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Prueba_id_seq"', 28, true);
          public          postgres    false    209            �
           2606    25644    Alumno Alumno_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Alumno"
    ADD CONSTRAINT "Alumno_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Alumno" DROP CONSTRAINT "Alumno_pkey";
       public            postgres    false    206            �
           2606    25693     CursoInscrito CursoInscrito_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."CursoInscrito"
    ADD CONSTRAINT "CursoInscrito_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."CursoInscrito" DROP CONSTRAINT "CursoInscrito_pkey";
       public            postgres    false    212            �
           2606    25658    Curso Curso_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Curso"
    ADD CONSTRAINT "Curso_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Curso" DROP CONSTRAINT "Curso_pkey";
       public            postgres    false    208            �
           2606    25630    Profesor Profesor_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Profesor"
    ADD CONSTRAINT "Profesor_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Profesor" DROP CONSTRAINT "Profesor_pkey";
       public            postgres    false    204            �
           2606    25674    Prueba Prueba_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Prueba"
    ADD CONSTRAINT "Prueba_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Prueba" DROP CONSTRAINT "Prueba_pkey";
       public            postgres    false    210            �
           2606    16399     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    202            �
           1259    25645    alumno_id_nombre    INDEX     K   CREATE INDEX alumno_id_nombre ON public."Alumno" USING btree (id, nombre);
 $   DROP INDEX public.alumno_id_nombre;
       public            postgres    false    206    206            �
           1259    25664    curso_id_nombre_semestre    INDEX     \   CREATE INDEX curso_id_nombre_semestre ON public."Curso" USING btree (id, nombre, semestre);
 ,   DROP INDEX public.curso_id_nombre_semestre;
       public            postgres    false    208    208    208            �
           1259    25704 $   curso_inscrito_id_curso_id_alumno_id    INDEX     u   CREATE INDEX curso_inscrito_id_curso_id_alumno_id ON public."CursoInscrito" USING btree (id, "cursoId", "alumnoId");
 8   DROP INDEX public.curso_inscrito_id_curso_id_alumno_id;
       public            postgres    false    212    212    212            �
           1259    25631    profesor_id_nombre    INDEX     O   CREATE INDEX profesor_id_nombre ON public."Profesor" USING btree (id, nombre);
 &   DROP INDEX public.profesor_id_nombre;
       public            postgres    false    204    204            �
           1259    25685    prueba_id_nota    INDEX     G   CREATE INDEX prueba_id_nota ON public."Prueba" USING btree (id, nota);
 "   DROP INDEX public.prueba_id_nota;
       public            postgres    false    210    210            �
           2606    25699 )   CursoInscrito CursoInscrito_alumnoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CursoInscrito"
    ADD CONSTRAINT "CursoInscrito_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES public."Alumno"(id);
 W   ALTER TABLE ONLY public."CursoInscrito" DROP CONSTRAINT "CursoInscrito_alumnoId_fkey";
       public          postgres    false    206    2737    212            �
           2606    25694 (   CursoInscrito CursoInscrito_cursoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."CursoInscrito"
    ADD CONSTRAINT "CursoInscrito_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES public."Curso"(id);
 V   ALTER TABLE ONLY public."CursoInscrito" DROP CONSTRAINT "CursoInscrito_cursoId_fkey";
       public          postgres    false    208    2740    212            �
           2606    25659    Curso Curso_profesorId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Curso"
    ADD CONSTRAINT "Curso_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES public."Profesor"(id);
 I   ALTER TABLE ONLY public."Curso" DROP CONSTRAINT "Curso_profesorId_fkey";
       public          postgres    false    208    2734    204            �
           2606    25680    Prueba Prueba_alumnoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Prueba"
    ADD CONSTRAINT "Prueba_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES public."Alumno"(id);
 I   ALTER TABLE ONLY public."Prueba" DROP CONSTRAINT "Prueba_alumnoId_fkey";
       public          postgres    false    210    2737    206            �
           2606    25675    Prueba Prueba_cursoId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Prueba"
    ADD CONSTRAINT "Prueba_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES public."Curso"(id);
 H   ALTER TABLE ONLY public."Prueba" DROP CONSTRAINT "Prueba_cursoId_fkey";
       public          postgres    false    210    208    2740            C   t   x�3�tK��,HU�M�K���I�L�JR�K���s9��tLt,������MLu��Hqq�%�$�d&*8����s�A���k���\�_��_T�Z�Y�Qjj� o�A�      E   �   x���1N1Ek�)����A:QD��%��"G^�2�#�Z��R�-�4����F�b�s��#����A-�$��B@�S��8�����v�#C|�J`�{�	�m��NYm�[��AX��V_���]hәK��~��X�!�����7���$�\��߱��t)˩�@���y���!�����Ԯ����#��,��#&`W&��8��P�ߩ������i� ���      I   {   x���K
�0�us
/А_m��x�sغA)���#C,I�$$��2�F*A�b�I'�ne��]�
3[�\����mݮn_�aM�6އ埶�*���R�׳�;��~D�}7İ��w�	�GmR      A   g   x�3�����Sp�O��2JR�K���s9��tLt,��������t��Hqq�$��* �K2(5Θ�+��839Q�17��$�3¥��=... R:�      G   �   x���1�0��99 ����ti�^�R�_2������_|q�����_ω��{ �f�3Չd�ĉ+f�?�"z-b�H�Hh�-��Bv�J������ʜ���C�<�����O��f�:��6��}a���+sز�%���-�l�.�lU�<�M��i�ߑ�61���&fp���&�ly���-�l��#�-�}�      ?   d   x�]��
� ����nj�/]L��X��� +�3oH�A�'nə��Iqu)R�%��@�1�^��T-�B��Z�{P�b>|@�Z�o�}H�|�;s�� �(27     